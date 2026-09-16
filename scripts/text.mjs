#!/usr/bin/env node
// /deck-text: every app-ready field for every word, through the creator's model,
// into cards.json and localizations/<known>.json, with a report (spec section 6).
//
//   node scripts/text.mjs <deck-folder> [--verify] [--refresh <key>] [--model gpt-4.1] [--prompt-file <path>]
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ResponseCache, cacheKey } from "./lib/cache.mjs";
import { apiKey } from "./lib/env.mjs";
import { loadFolder, today, writeJson } from "./lib/folder.mjs";
import { describeOpen } from "./lib/agent.mjs";
import { DEFAULT_MODEL, makeClient } from "./lib/openai.mjs";
import { CARD_SCHEMA, VERIFY_SCHEMA, fill, grammarRules, loadPrompt } from "./lib/prompts.mjs";
import { loadLanguageFacts, nameOf } from "./lib/registry.mjs";
import { renderReport } from "./lib/report.mjs";
import { keyOf } from "./lib/schema.mjs";
import { assignOffsets, tokenProblems } from "./lib/tokens.mjs";

/** One model answer (CARD_SCHEMA) becomes a card plus its localization entry; token problems become flags. */
export function splitAnswer(answer, { word }) {
  const flags = [];
  const card = {
    key: "",
    text: answer.text?.trim() || word,
    article: answer.article || null,
    gender: answer.gender || null,
    plural: answer.plural || null,
    partOfSpeech: answer.partOfSpeech,
    phonetic: answer.phonetic ?? "",
    romanization: answer.romanization || null,
    sticker: {
      mode: answer.stickerMode,
      file: null,
      concept: answer.stickerMode === "text-first" ? "" : answer.stickerConcept,
    },
    examples: [],
    review: { confidence: answer.confidence, safe: answer.childSafe, flags, notes: answer.notes ?? "" },
  };
  card.key = keyOf(card);
  const loc = { key: card.key, translation: answer.translation, examples: [] };
  for (const [i, ex] of (answer.examples ?? []).entries()) {
    const withOffsets = assignOffsets(
      ex.source,
      ex.tokens.map((t) => ({ ...t })),
    );
    const problems = tokenProblems(ex.source, withOffsets);
    if (problems.length) flags.push(`example ${i + 1}: ${problems[0]}`);
    card.examples.push({
      source: ex.source,
      tokens: withOffsets.map((t) => ({
        text: t.text,
        start: t.start,
        end: t.end,
        lemma: t.lemma,
        partOfSpeech: t.partOfSpeech,
        grammarCodes: t.grammarCodes ?? [],
        article: t.article || null,
        gender: t.gender || null,
        plural: t.plural || null,
      })),
    });
    loc.examples.push({ target: ex.target, tokens: ex.tokens.map((t) => ({ meanings: t.meanings })) });
  }
  if (!card.phonetic) flags.push("no-phonetic");
  if (!answer.childSafe) flags.push("unsafe");
  if (answer.confidence === "low") flags.push("low-confidence");
  return { card, loc };
}

export async function generateText(
  dir,
  {
    client,
    model = DEFAULT_MODEL,
    verify = false,
    refresh = [],
    promptFile = null,
    facts = loadLanguageFacts(),
    log = console.log,
  } = {},
) {
  const folder = loadFolder(dir);
  const { deck, words } = folder;
  if (!words?.length) throw new Error(`${dir}/words.json is empty; run /deck-create first`);
  const prompt = loadPrompt("card", { file: promptFile });
  const verifyPrompt = verify ? loadPrompt("verify") : null;
  const cache = new ResponseCache(dir);
  const values = {
    known: deck.knownLanguage,
    knownName: nameOf(deck.knownLanguage, facts),
    learning: deck.learningLanguage,
    learningName: nameOf(deck.learningLanguage, facts),
    level: deck.level,
    topic: deck.topic ?? deck.name,
    ipa: facts[deck.learningLanguage]?.ipa ?? "standard pronunciation",
    grammarRules: grammarRules(facts, deck.learningLanguage),
  };
  const system = fill(prompt.body, values);
  if (refresh.length) cache.drop((note) => refresh.some((r) => note === `card:${r}`));

  const cards = [];
  const localization = [];
  const verification = {};
  for (const entry of words) {
    if (entry.include === false) continue;
    const word = entry.article ? `${entry.article} ${entry.word}` : entry.word;
    const user = JSON.stringify({
      headword: entry.word,
      article: entry.article ?? null,
      hint: entry.hint ?? "",
      topic: values.topic,
      level: deck.level,
    });
    const key = cacheKey({ model, promptVersion: prompt.version, system, user });
    let answer = cache.get(key)?.value;
    if (!answer) {
      log(`text: ${word}`);
      answer = await client.chatJson({
        key: `text:${deck.id}:${entry.word}`,
        model,
        system,
        user,
        schema: CARD_SCHEMA,
        schemaName: "vocabloot_card",
      });
      if (!answer) continue; // the agent has a request to answer; nothing is written this run
      cache.put(key, answer, `card:${entry.word}`);
    }
    const { card, loc } = splitAnswer(answer, { word: entry.word });
    // A sticker already reviewed for this key survives a text rerun; its mode was the reviewer's decision.
    const previous = folder.cards?.find((c) => c.key === card.key);
    if (previous?.sticker?.file && previous.sticker.mode !== "text-first") {
      card.sticker = {
        mode: previous.sticker.mode,
        file: previous.sticker.file,
        concept: previous.sticker.concept || card.sticker.concept,
      };
      card.review.flags.push(...(previous.review?.flags ?? []).filter((f) => f.startsWith("sticker")));
    }
    if (cards.some((c) => c.key === card.key)) {
      card.review.flags.push("duplicate-key");
    }
    if (verify) {
      const vUser = JSON.stringify({ card, localization: loc });
      const vKey = cacheKey({ model, promptVersion: verifyPrompt.version, vUser });
      let v = cache.get(vKey)?.value;
      if (!v) {
        v = await client.chatJson({
          key: `verify:${deck.id}:${entry.word}`,
          model,
          system: fill(verifyPrompt.body, values),
          user: vUser,
          schema: VERIFY_SCHEMA,
          schemaName: "vocabloot_verify",
        });
        if (!v) continue;
        cache.put(vKey, v, `verify:${entry.word}`);
      }
      verification[card.key] = v;
      if (!(v.natural && v.levelOk && v.correct && v.safe)) card.review.flags.push(`verify: ${v.issue || "problem"}`);
    }
    cards.push(card);
    localization.push(loc);
  }
  if (client.isAgent && (client.missing.length || client.rejected.length)) {
    return { cards: 0, flagged: 0, report: null, open: describeOpen(client, dir) };
  }
  deck.updatedAt = today();
  deck.promptVersion = prompt.version;
  deck.wordCount = cards.length;
  writeJson(path.join(dir, "deck.json"), deck);
  writeJson(path.join(dir, "cards.json"), cards);
  writeJson(path.join(dir, "localizations", `${deck.knownLanguage}.json`), localization);
  const report = renderReport({ deck, cards, localization, verification });
  writeJson(path.join(dir, "review", "verification.json"), verification);
  const { writeFileSync, mkdirSync } = await import("node:fs");
  mkdirSync(path.join(dir, "review"), { recursive: true });
  writeFileSync(path.join(dir, "review", "report.md"), report);
  const flagged = cards.filter((c) => c.review.flags.length).length;
  return { cards: cards.length, flagged, report: path.join(dir, "review", "report.md") };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const dir = args.find((a) => !a.startsWith("--"));
  if (!dir) {
    console.error(
      "usage: node scripts/text.mjs <deck-folder> [--agent] [--verify] [--refresh <key>] [--model <model>] [--prompt-file <path>]",
    );
    process.exit(2);
  }
  const opt = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
  const refresh = args.flatMap((a, i) => (a === "--refresh" ? [args[i + 1]] : []));
  try {
    const client = makeClient({
      apiKey: apiKey({ deckDir: dir }),
      agent: args.includes("--agent"),
      workDir: path.join(dir, "work"),
    });
    const result = await generateText(dir, {
      client,
      model: opt("--model") ?? DEFAULT_MODEL,
      verify: args.includes("--verify"),
      refresh,
      promptFile: opt("--prompt-file") ?? null,
    });
    if (result.open) {
      console.log(result.open.join("\n"));
      process.exit(3);
    }
    console.log(
      `${result.cards} cards written, ${result.flagged} flagged. Read ${result.report} before /deck-stickers.`,
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
