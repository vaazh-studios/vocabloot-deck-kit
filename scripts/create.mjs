#!/usr/bin/env node
// /deck-create: the language pair against the app's registry, the deck folder,
// and the proposed word list from the topic (spec sections 2 and 3).
//
//   node scripts/create.mjs --known "English" --learning "German" --topic "at the bakery" --count 20 --level A1 [--include "Brötchen, Kaffee"] [--avoid "Bier"] [--author "Nirmal"] [--id de-bakery] [--out ./decks] [--offline]
import path from "node:path";
import { fileURLToPath } from "node:url";

import { apiKey } from "./lib/env.mjs";
import { today, writeJson } from "./lib/folder.mjs";
import { DEFAULT_MODEL, makeClient } from "./lib/openai.mjs";
import { WORDS_SCHEMA, fill, loadPrompt } from "./lib/prompts.mjs";
import {
  directionOf,
  fetchRegistry,
  loadLanguageFacts,
  loadSnapshot,
  nameOf,
  resolveLanguage,
  validatePair,
} from "./lib/registry.mjs";
import { LEVELS } from "./lib/schema.mjs";

export function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

/** Resolves and validates the pair; returns { known, learning, direction } or throws with the registry's own wording. */
export function resolvePair({ known, learning }, registry, facts = loadLanguageFacts()) {
  const all = Object.keys(facts);
  const k = resolveLanguage(known, all, facts) ?? known;
  const l = resolveLanguage(learning, all, facts) ?? learning;
  const problems = validatePair({ known: k, learning: l }, registry, facts);
  if (problems.length) throw new Error(problems.join("\n"));
  return { known: k, learning: l, direction: directionOf({ known: k, learning: l }) };
}

export async function createDeck({
  known,
  learning,
  topic,
  count,
  level,
  include = "",
  avoid = "",
  author = "Anonymous",
  id,
  out = ".",
  client,
  registry,
  facts = loadLanguageFacts(),
  model = DEFAULT_MODEL,
  log = console.log,
}) {
  const pair = resolvePair({ known, learning }, registry, facts);
  if (!LEVELS.includes(level)) throw new Error(`Level must be one of ${LEVELS.join(", ")}.`);
  const n = Number(count);
  if (!Number.isInteger(n) || n < 5 || n > 200) throw new Error("Number of words must be between 5 and 200.");
  const deckId = id ?? `${pair.learning.slice(0, 2).toLowerCase()}-${slugify(topic)}`;
  const dir = path.join(out, deckId);
  const deck = {
    schemaVersion: 1,
    id: deckId,
    name: `${nameOf(pair.learning, facts)} ${topic.replace(/^\w/, (c) => c.toUpperCase())}`,
    description: "",
    learningLanguage: pair.learning,
    knownLanguage: pair.known,
    direction: pair.direction,
    topic: slugify(topic),
    level,
    wordCount: n,
    author,
    licence: "CC-BY-SA-4.0",
    attribution: { title: "", author, url: "", note: "" },
    createdAt: today(),
    updatedAt: today(),
    kitVersion: "0.1.0",
    promptVersion: "",
  };
  const prompt = loadPrompt("words");
  const values = {
    knownName: nameOf(pair.known, facts),
    learningName: nameOf(pair.learning, facts),
    level,
    topic,
    count: n,
    include: include || "none",
    avoid: avoid || "none",
  };
  log(`create: proposing ${n} ${values.learningName} words for "${topic}"`);
  const answer = await client.chatJson({
    key: `words:${deckId}:${n}:${include}:${avoid}`,
    model,
    system: fill(prompt.body, values),
    user: JSON.stringify({ topic, count: n, level, include, avoid }),
    schema: WORDS_SCHEMA,
    schemaName: "vocabloot_words",
  });
  const seen = new Set();
  const words = [];
  for (const w of answer.words ?? []) {
    const text = String(w.word ?? "").trim();
    const k = text.toLowerCase();
    if (!text || seen.has(k)) continue;
    seen.add(k);
    words.push({ word: text, article: w.article || null, hint: w.hint ?? "", include: true });
  }
  if (words.length < Math.min(n, 5)) throw new Error("The model proposed too few words; try a broader topic.");
  deck.wordCount = words.length;
  writeJson(path.join(dir, "deck.json"), deck);
  writeJson(path.join(dir, "words.json"), words);
  return { dir, deck, words };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const opt = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
  try {
    const registry = args.includes("--offline") ? { ...loadSnapshot(), via: "snapshot" } : await fetchRegistry();
    const client = makeClient({ apiKey: apiKey({ deckDir: opt("--out", ".") }) });
    const result = await createDeck({
      known: opt("--known"),
      learning: opt("--learning"),
      topic: opt("--topic"),
      count: opt("--count", "20"),
      level: opt("--level", "A1"),
      include: opt("--include", ""),
      avoid: opt("--avoid", ""),
      author: opt("--author", "Anonymous"),
      id: opt("--id"),
      out: opt("--out", "."),
      client,
      registry,
    });
    console.log(
      `${result.dir}: ${result.words.length} words proposed (registry via ${registry.via}, checked ${registry.checkedAt}).`,
    );
    for (const w of result.words)
      console.log(`  ${w.article ? `${w.article} ` : ""}${w.word}${w.hint ? `  (${w.hint})` : ""}`);
    console.log("Edit words.json or ask for changes, then run /deck-text.");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
