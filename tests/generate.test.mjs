import assert from "node:assert/strict";
import { cpSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { createDeck, resolvePair } from "../scripts/create.mjs";
import { checkFolder } from "../scripts/check.mjs";
import { loadFolder } from "../scripts/lib/folder.mjs";
import { FixtureClient } from "../scripts/lib/openai.mjs";
import { decide, modeFor, runStickers, stickerPrompt } from "../scripts/stickers.mjs";
import { generateText, splitAnswer } from "../scripts/text.mjs";
import { cardAnswerFrom, record } from "./helpers/fixtures.mjs";

const MINI = fileURLToPath(new URL("./fixtures/mini-deck", import.meta.url));
const CANON = fileURLToPath(new URL("../examples/de-greetings", import.meta.url));
const registry = { learning: ["de", "en-US", "ja"], known: ["en-US", "de"] };

function tmp(name) {
  return mkdtempSync(path.join(os.tmpdir(), name));
}

/** A copy of a deck folder with fixtures recorded from its own cards, and a client that replays them. */
function replayable(source) {
  const dir = tmp("deck-");
  cpSync(source, dir, { recursive: true });
  const f = loadFolder(dir);
  const fixtures = tmp("fx-");
  const loc = new Map(f.localization.map((l) => [l.key, l]));
  for (const c of f.cards) record(fixtures, `text:${f.deck.id}:${c.text}`, cardAnswerFrom(c, loc.get(c.key)));
  if (!existsSync(path.join(dir, "words.json")))
    writeFileSync(
      path.join(dir, "words.json"),
      JSON.stringify(f.cards.map((c) => ({ word: c.text, article: c.article, include: true }))),
    );
  return { dir, client: new FixtureClient(fixtures), folder: f };
}

test("splitAnswer turns a model answer into a card and a localization with offsets and flags", () => {
  const answer = {
    text: "Haus",
    article: "das",
    gender: "neuter",
    plural: "Häuser",
    partOfSpeech: "noun",
    phonetic: "/haʊs/",
    romanization: null,
    translation: "house",
    stickerMode: "sticker",
    stickerConcept: "a small house",
    confidence: "high",
    childSafe: true,
    notes: "",
    examples: [
      {
        source: "Das Haus ist alt.",
        target: "The house is old.",
        tokens: [
          {
            text: "Das",
            lemma: "der",
            partOfSpeech: "article",
            grammarCodes: ["nominative"],
            meanings: ["the"],
            article: null,
            gender: null,
            plural: null,
          },
          {
            text: "Haus",
            lemma: "Haus",
            partOfSpeech: "noun",
            grammarCodes: [],
            meanings: ["house"],
            article: "das",
            gender: "neuter",
            plural: "Häuser",
          },
          {
            text: "ist",
            lemma: "sein",
            partOfSpeech: "verb",
            grammarCodes: ["present"],
            meanings: ["is"],
            article: null,
            gender: null,
            plural: null,
          },
          {
            text: "alt",
            lemma: "alt",
            partOfSpeech: "adjective",
            grammarCodes: [],
            meanings: ["old"],
            article: null,
            gender: null,
            plural: null,
          },
        ],
      },
      {
        source: "Wir bauen ein Haus.",
        target: "We build a house.",
        tokens: [
          {
            text: "Wir",
            lemma: "wir",
            partOfSpeech: "pronoun",
            grammarCodes: [],
            meanings: ["we"],
            article: null,
            gender: null,
            plural: null,
          },
          {
            text: "bauen",
            lemma: "bauen",
            partOfSpeech: "verb",
            grammarCodes: ["present"],
            meanings: ["build"],
            article: null,
            gender: null,
            plural: null,
          },
          {
            text: "Haus",
            lemma: "Haus",
            partOfSpeech: "noun",
            grammarCodes: [],
            meanings: ["house"],
            article: "das",
            gender: "neuter",
            plural: "Häuser",
          },
        ],
      },
    ],
  };
  const { card, loc } = splitAnswer(answer, { word: "Haus" });
  assert.equal(card.key, "Haus|das|noun");
  assert.deepEqual(
    card.examples[0].tokens.map((t) => [t.start, t.end]),
    [
      [0, 3],
      [4, 8],
      [9, 12],
      [13, 16],
    ],
  );
  assert.deepEqual(
    loc.examples[0].tokens.map((t) => t.meanings),
    [["the"], ["house"], ["is"], ["old"]],
  );
  assert.deepEqual(
    card.review.flags,
    ["example 2: word 'ein' has no token"],
    "an uncovered word is flagged, never silently packed",
  );
});

test("generateText replays the canonical deck's fixtures into byte-identical cards and localization", async () => {
  const { dir, client, folder } = replayable(CANON);
  const before = {
    cards: readFileSync(path.join(CANON, "cards.json"), "utf8"),
    loc: readFileSync(path.join(CANON, "localizations", "en-US.json"), "utf8"),
  };
  const result = await generateText(dir, { client, log: () => {} });
  assert.equal(result.cards, 20);
  assert.equal(result.flagged, 0);
  const after = loadFolder(dir);
  // The sticker files are the review's business, not the generator's: compare everything else.
  const strip = (cards) =>
    JSON.stringify(
      cards.map((c) => ({ ...c, sticker: { ...c.sticker, file: null }, review: { ...c.review, notes: undefined } })),
    );
  assert.equal(strip(after.cards), strip(JSON.parse(before.cards)));
  assert.equal(JSON.stringify(after.localization), JSON.stringify(JSON.parse(before.loc)));
  assert.ok(existsSync(path.join(dir, "review", "report.md")) && existsSync(path.join(dir, "cards-cache.json")));
  // A rerun hits the cache and changes nothing.
  const again = await generateText(dir, { client: new FixtureClient(tmp("empty-")), log: () => {} });
  assert.equal(again.cards, 20);
  assert.equal(readFileSync(path.join(dir, "cards.json"), "utf8"), JSON.stringify(after.cards, null, 2) + "\n");
  assert.equal(folder.deck.id, "de-greetings");
});

test("createDeck validates the pair against the registry and scaffolds the folder from a proposal", async () => {
  assert.throws(
    () => resolvePair({ known: "Japanese", learning: "German" }, registry),
    /does not offer Japanese \(ja\) as a language you speak/,
  );
  assert.throws(() => resolvePair({ known: "German", learning: "de" }, registry), /must differ/);
  const fixtures = tmp("fx-");
  record(fixtures, "words:de-bakery:6::", {
    words: [
      { word: "Brötchen", article: "das", hint: "bread roll" },
      { word: "Brot", article: "das", hint: "bread" },
      { word: "Kuchen", article: "der", hint: "cake" },
      { word: "brot", article: "das", hint: "duplicate" },
      { word: "bezahlen", article: null, hint: "to pay" },
      { word: "bitte", article: null, hint: "please" },
      { word: "danke", article: null, hint: "thanks" },
    ],
  });
  const out = tmp("out-");
  const r = await createDeck({
    known: "English",
    learning: "German",
    topic: "bakery",
    count: 6,
    level: "A1",
    author: "Tester",
    out,
    client: new FixtureClient(fixtures),
    registry,
    log: () => {},
  });
  assert.equal(r.deck.id, "de-bakery");
  assert.equal(r.deck.direction, "en-US-to-de");
  assert.equal(r.words.length, 6, "the duplicate is dropped");
  assert.equal(r.deck.wordCount, 6);
  assert.ok(existsSync(path.join(out, "de-bakery", "words.json")));
});

test("stickers: modes, prompts, checks, the sheet, and a decision that prepares the file", async () => {
  assert.equal(modeFor({ partOfSpeech: "preposition", sticker: { mode: "sticker" } }), "text-first");
  assert.equal(modeFor({ partOfSpeech: "noun", sticker: { mode: "sticker" } }), "sticker");
  const { prompt, negative } = stickerPrompt({
    mode: "sticker",
    concept: "a bread roll",
    facet: null,
    template: 'Vocabloot sticker style, for any image model:\n\n"{concept}. Centred. {facet}"\n\nNegative: text, logo',
  });
  assert.equal(prompt, "a bread roll. Centred.");
  assert.equal(negative, "text, logo");

  const dir = tmp("deck-");
  cpSync(MINI, dir, { recursive: true });
  // Start from an unreviewed state: no approvals, the sticker only in source/.
  writeFileSync(path.join(dir, "review", "review.json"), JSON.stringify({ stickers: {} }));
  const cards = JSON.parse(readFileSync(path.join(dir, "cards.json"), "utf8"));
  cards[0].sticker = { mode: "sticker", file: null, concept: "a person waving hello" };
  writeFileSync(path.join(dir, "cards.json"), JSON.stringify(cards));
  cpSync(path.join(MINI, "stickers", "hallo.png"), path.join(dir, "stickers", "source", "hallo.png"));
  const fixtures = tmp("fx-");
  record(fixtures, "vision:de-mini:Hallo||interjection", {
    depicts: true,
    reason: "A person waving, clearly a greeting.",
  });
  const result = await runStickers(dir, { provider: "none", client: new FixtureClient(fixtures), log: () => {} });
  assert.equal(result.pending, 1);
  assert.equal(result.failed, 0);
  assert.match(checkFolder(loadFolder(dir)).join(";"), /sticker-pending-review/, "nothing packs before the review");
  const sheet = readFileSync(path.join(dir, "review", "stickers.html"), "utf8");
  assert.ok(sheet.includes("depicts it") && sheet.includes("Hallo"));
  const prompts = JSON.parse(readFileSync(path.join(dir, "prompts", "stickers.json"), "utf8"));
  assert.ok(prompts[0].prompt.includes("a person waving hello") && prompts[0].facet, "people stickers get a facet");
  assert.equal(prompts[1].mode, "text-first");

  const sticker = await decide(dir, "Hallo||interjection", "approved");
  assert.equal(sticker.file, "stickers/hallo.png");
  const meta = await sharp(readFileSync(path.join(dir, "stickers", "hallo.png"))).metadata();
  assert.equal(Math.max(meta.width, meta.height), 768);
  assert.deepEqual(checkFolder(loadFolder(dir)), [], "approved and prepared: ready to pack");

  // A flat image with no alpha fails the mechanical check and flags the card.
  const flat = await sharp({ create: { width: 600, height: 600, channels: 3, background: "#ff0000" } })
    .png()
    .toBuffer();
  writeFileSync(path.join(dir, "stickers", "source", "hallo.png"), flat);
  const again = await runStickers(dir, {
    provider: "none",
    client: new FixtureClient(fixtures),
    force: ["Hallo||interjection"],
    log: () => {},
  });
  assert.equal(again.failed, 1);
  assert.match(checkFolder(loadFolder(dir)).join(";"), /sticker-check: no alpha channel/);
});

test("a missing image keeps the card's intended mode and concept, and a text rerun keeps a reviewed sticker without losing the concept", async () => {
  const dir = tmp("deck-");
  cpSync(MINI, dir, { recursive: true });
  writeFileSync(path.join(dir, "review", "review.json"), JSON.stringify({ stickers: {} }));
  const cards = JSON.parse(readFileSync(path.join(dir, "cards.json"), "utf8"));
  cards[0].sticker = { mode: "sticker", file: null, concept: "a person waving hello" };
  writeFileSync(path.join(dir, "cards.json"), JSON.stringify(cards));
  // No image anywhere: the first run reports it missing but changes nothing about the intent.
  const first = await runStickers(dir, { provider: "none", client: null, vision: false, log: () => {} });
  assert.equal(first.failed, 1);
  const afterMissing = loadFolder(dir).cards[0].sticker;
  assert.deepEqual(afterMissing, { mode: "sticker", file: null, concept: "a person waving hello" });
  // The creator drops the image in and approves it.
  cpSync(path.join(MINI, "stickers", "hallo.png"), path.join(dir, "stickers", "source", "hallo.png"));
  await runStickers(dir, { provider: "none", client: null, vision: false, log: () => {} });
  await decide(dir, "Hallo||interjection", "approved");
  // A text rerun (same words, replayed answers) keeps the approved file and the concept.
  const fixtures = tmp("fx-");
  const f = loadFolder(dir);
  const loc = new Map(f.localization.map((l) => [l.key, l]));
  for (const c of f.cards)
    record(fixtures, `text:${f.deck.id}:${c.text}`, {
      ...cardAnswerFrom(c, loc.get(c.key)),
      stickerConcept: "a person waving hello",
    });
  writeFileSync(
    path.join(dir, "words.json"),
    JSON.stringify(f.cards.map((c) => ({ word: c.text, article: c.article, include: true }))),
  );
  await generateText(dir, { client: new FixtureClient(fixtures), log: () => {} });
  const after = loadFolder(dir).cards[0].sticker;
  assert.deepEqual(after, { mode: "sticker", file: "stickers/hallo.png", concept: "a person waving hello" });
  assert.deepEqual(checkFolder(loadFolder(dir)), []);
});
