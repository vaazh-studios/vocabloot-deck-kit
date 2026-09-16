// No key: the agent running the skill answers the kit's requests itself.
import assert from "node:assert/strict";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { createDeck } from "../scripts/create.mjs";
import { checkFolder } from "../scripts/check.mjs";
import { AgentClient, requestPaths } from "../scripts/lib/agent.mjs";
import { loadFolder } from "../scripts/lib/folder.mjs";
import { validateAgainst } from "../scripts/lib/jsonschema.mjs";
import { makeClient } from "../scripts/lib/openai.mjs";
import { CARD_SCHEMA } from "../scripts/lib/prompts.mjs";
import { runStickers } from "../scripts/stickers.mjs";
import { generateText } from "../scripts/text.mjs";
import { cardAnswerFrom } from "./helpers/fixtures.mjs";

const CANON = fileURLToPath(new URL("../examples/de-greetings", import.meta.url));
const MINI = fileURLToPath(new URL("./fixtures/mini-deck", import.meta.url));
const tmp = (name) => mkdtempSync(path.join(os.tmpdir(), name));

test("validateAgainst names the wrong field, the missing field, the extra field and the bad enum", () => {
  const good = {
    text: "Haus",
    article: "das",
    gender: "neuter",
    plural: "Häuser",
    partOfSpeech: "noun",
    phonetic: "/haʊs/",
    romanization: null,
    translation: "house",
    stickerMode: "sticker",
    stickerConcept: "a house",
    examples: [],
    confidence: "high",
    childSafe: true,
    notes: "",
  };
  assert.deepEqual(validateAgainst(CARD_SCHEMA, good), ["answer.examples: at least 2 items required, got 0"]);
  const canon = loadFolder(CANON);
  const loc = new Map(canon.localization.map((l) => [l.key, l]));
  assert.deepEqual(validateAgainst(CARD_SCHEMA, cardAnswerFrom(canon.cards[0], loc.get(canon.cards[0].key))), []);
  const bad = { ...good, stickerMode: "photo", extra: 1, childSafe: "yes" };
  delete bad.notes;
  const p = validateAgainst(CARD_SCHEMA, bad).join(";");
  assert.match(p, /answer\.notes: missing/);
  assert.match(p, /answer\.extra: not a field/);
  assert.match(p, /answer\.stickerMode: must be one of "sticker", "symbolic", "contextual", "text-first"/);
  assert.match(p, /answer\.childSafe: expected boolean, got string/);
});

test("without a key makeClient is the agent; a key or fixtures still win", () => {
  assert.ok(makeClient({ apiKey: null, fixtures: undefined, workDir: tmp("w-") }).isAgent);
  assert.ok(makeClient({ apiKey: "sk-x", fixtures: undefined, agent: true, workDir: tmp("w-") }).isAgent);
  assert.ok(!makeClient({ apiKey: "sk-x", fixtures: undefined }).isAgent);
});

test("the agent writes the canonical deck: requests out, answers in, byte-identical cards", async () => {
  const dir = tmp("deck-");
  cpSync(CANON, dir, { recursive: true });
  for (const f of ["cards.json", "cards-cache.json", "localizations/en-US.json", "review", "prompts"])
    rmSync(path.join(dir, f), { recursive: true, force: true });
  const client = new AgentClient(path.join(dir, "work"));
  const first = await generateText(dir, { client, log: () => {} });
  assert.equal(first.cards, 0);
  assert.equal(client.missing.length, 20);
  assert.ok(!existsSync(path.join(dir, "cards.json")), "nothing is written while requests are open");
  const req = readFileSync(client.missing[0].request, "utf8");
  assert.match(req, /Write your answer as one JSON object to `work\/text\/hallo\.json`/);
  assert.match(req, /## Instructions[\s\S]*## Input[\s\S]*"headword": "Hallo"[\s\S]*## JSON schema/);
  assert.match(first.open.join("\n"), /20 requests to answer, then run the same command again/);

  // The agent answers every request the way the model did (the canonical cards themselves).
  const canon = loadFolder(CANON);
  const loc = new Map(canon.localization.map((l) => [l.key, l]));
  for (const c of canon.cards) {
    const { answer } = requestPaths(client.workDir, `text:${canon.deck.id}:${c.text}`);
    writeFileSync(answer, JSON.stringify(cardAnswerFrom(c, loc.get(c.key)), null, 2));
  }
  // One answer is wrong on purpose: it is named, nothing is written, the rest wait.
  const { answer: halloAnswer } = requestPaths(client.workDir, `text:${canon.deck.id}:Hallo`);
  const hallo = JSON.parse(readFileSync(halloAnswer, "utf8"));
  writeFileSync(halloAnswer, JSON.stringify({ ...hallo, stickerMode: "photo" }));
  const second = await generateText(dir, { client: new AgentClient(path.join(dir, "work")), log: () => {} });
  assert.equal(second.cards, 0);
  assert.match(second.open.join("\n"), /work\/text\/hallo\.json[\s\S]*stickerMode: must be one of/);
  writeFileSync(halloAnswer, JSON.stringify(hallo));

  const third = await generateText(dir, { client: new AgentClient(path.join(dir, "work")), log: () => {} });
  assert.equal(third.cards, 20);
  const strip = (cards) => JSON.stringify(cards.map((c) => ({ ...c, sticker: { ...c.sticker, file: null } })));
  assert.equal(strip(loadFolder(dir).cards), strip(canon.cards));
  assert.equal(JSON.stringify(loadFolder(dir).localization), JSON.stringify(canon.localization));
  // The answers are cached: a rerun with an empty work folder changes nothing.
  rmSync(path.join(dir, "work"), { recursive: true });
  const fourth = await generateText(dir, { client: new AgentClient(path.join(dir, "work")), log: () => {} });
  assert.equal(fourth.cards, 20);
});

test("the agent proposes the words: create scaffolds the folder and leaves one request", async () => {
  const out = tmp("out-");
  const registry = { learning: ["de", "en-US"], known: ["en-US", "de"], via: "test", checkedAt: "2026-09-16" };
  const client = new AgentClient(path.join(out, "unused"));
  const result = await createDeck({
    known: "English",
    learning: "German",
    topic: "at the bakery",
    count: 6,
    level: "A1",
    author: "T",
    out,
    client,
    registry,
    log: () => {},
  });
  assert.ok(result.open, "a request is open");
  assert.ok(existsSync(path.join(result.dir, "deck.json")));
  assert.deepEqual(JSON.parse(readFileSync(path.join(result.dir, "words.json"), "utf8")), []);
  const { request, answer } = requestPaths(path.join(result.dir, "work"), `words:de-at-the-bakery:6::`);
  assert.ok(existsSync(request), "the request lives with the deck");
  assert.equal(path.basename(request), "proposal.request.md");
  writeFileSync(
    answer,
    JSON.stringify({
      words: [
        { word: "Brötchen", article: "das", hint: "" },
        { word: "Brot", article: "das", hint: "" },
        { word: "Kuchen", article: "der", hint: "" },
        { word: "bitte", article: null, hint: "" },
        { word: "danke", article: null, hint: "" },
        { word: "kaufen", article: null, hint: "" },
      ],
    }),
  );
  const again = await createDeck({
    known: "English",
    learning: "German",
    topic: "at the bakery",
    count: 6,
    level: "A1",
    author: "T",
    out,
    client: new AgentClient(path.join(out, "unused")),
    registry,
    log: () => {},
  });
  assert.equal(again.words.length, 6);
  assert.equal(again.open, undefined);
});

test("the agent looks at the sticker itself: a vision request names the image, its verdict flags the card", async () => {
  const dir = tmp("deck-");
  cpSync(MINI, dir, { recursive: true });
  writeFileSync(path.join(dir, "review", "review.json"), JSON.stringify({ stickers: {} }));
  const cards = JSON.parse(readFileSync(path.join(dir, "cards.json"), "utf8"));
  cards[0].sticker = { mode: "sticker", file: null, concept: "a person waving hello" };
  writeFileSync(path.join(dir, "cards.json"), JSON.stringify(cards));
  cpSync(path.join(MINI, "stickers", "hallo.png"), path.join(dir, "stickers", "source", "hallo.png"));
  const client = new AgentClient(path.join(dir, "work"));
  const first = await runStickers(dir, { provider: "none", client, log: () => {} });
  assert.equal(first.pending, 1, "no verdict yet: the sticker waits for the review");
  assert.equal(client.missing.length, 1);
  const req = readFileSync(client.missing[0].request, "utf8");
  assert.match(req, /## Look at this image\n\n`stickers\/source\/hallo\.png`/);
  assert.match(req, /The sticker's mode is "sticker"/);
  writeFileSync(
    client.missing[0].answer,
    JSON.stringify({ depicts: false, reason: "A person, but not clearly waving." }),
  );
  const second = await runStickers(dir, {
    provider: "none",
    client: new AgentClient(path.join(dir, "work")),
    log: () => {},
  });
  assert.equal(second.failed, 1);
  assert.equal(second.open, null);
  assert.match(checkFolder(loadFolder(dir)).join(";"), /sticker-vague: A person, but not clearly waving/);
});
