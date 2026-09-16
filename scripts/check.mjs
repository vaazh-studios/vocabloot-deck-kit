#!/usr/bin/env node
// /deck-check: every gate the packer enforces, plus review/preview.html.
//
//   node scripts/check.mjs <deck-folder>
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadFolder, stickerExists } from "./lib/folder.mjs";
import { lazyTokenProblems } from "./lib/tokens.mjs";
import { loadLanguageFacts } from "./lib/registry.mjs";
import { deferredKeys, validateCards, validateDeck, validateLocalization, validateReview } from "./lib/schema.mjs";
import { renderPreview } from "./lib/preview.mjs";

/** All problems for a loaded folder; [] means ready to pack. */
export function checkFolder(folder, { facts = loadLanguageFacts() } = {}) {
  const p = [];
  p.push(...validateDeck(folder.deck));
  if (!folder.cards) return [...p, "cards.json is missing; run /deck-text"];
  const deferred = deferredKeys(folder.review);
  p.push(...validateCards(folder.cards, { facts, learningLanguage: folder.deck.learningLanguage, deferred }));
  if (!folder.localization) p.push(`localizations/${folder.deck.knownLanguage}.json is missing; run /deck-text`);
  else {
    p.push(...validateLocalization(folder.localization, folder.cards));
    // Tokens someone filled in without doing the work fail here too, however cards.json was written.
    const sameLanguage = folder.deck.learningLanguage.slice(0, 2) === folder.deck.knownLanguage.slice(0, 2);
    const loc = new Map(folder.localization.map((l) => [l.key, l]));
    for (const card of folder.cards) {
      const l = loc.get(card.key);
      (card.examples ?? []).forEach((ex, i) => {
        const meanings = l?.examples?.[i]?.tokens?.map((t) => t.meanings) ?? [];
        for (const problem of lazyTokenProblems(ex.tokens ?? [], meanings, { sameLanguage }))
          p.push(`${card.key} example ${i + 1}: ${problem}`);
      });
    }
  }
  for (const c of folder.cards) {
    if (c.sticker?.mode !== "text-first" && c.sticker?.file && !stickerExists(folder.dir, c))
      p.push(`${c.key}: sticker file ${c.sticker.file} is missing`);
    if (c.review?.safe === false) p.push(`${c.key}: marked unsafe`);
    if (c.review?.flags?.length) p.push(`${c.key}: unresolved flags: ${c.review.flags.join(", ")}`);
  }
  p.push(...validateReview(folder.review, folder.cards));
  if (folder.deck.wordCount && folder.cards.length !== folder.deck.wordCount)
    p.push(`deck.wordCount is ${folder.deck.wordCount} but there are ${folder.cards.length} cards`);
  return p;
}

export function writePreview(folder) {
  const dir = path.join(folder.dir, "review");
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "preview.html");
  writeFileSync(file, renderPreview(folder));
  return file;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("usage: node scripts/check.mjs <deck-folder>");
    process.exit(2);
  }
  const folder = loadFolder(dir);
  const problems = checkFolder(folder);
  if (folder.cards) console.log(`preview: ${writePreview(folder)}`);
  if (problems.length) {
    console.error(`${problems.length} problem${problems.length === 1 ? "" : "s"}:`);
    for (const m of problems) console.error(`  ${m}`);
    process.exit(1);
  }
  console.log(`${folder.deck.id}: ${folder.cards.length} cards, ready to pack`);
}
