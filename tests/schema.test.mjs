import assert from "node:assert/strict";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { loadFolder } from "../scripts/lib/folder.mjs";
import { loadLanguageFacts } from "../scripts/lib/registry.mjs";
import { validateCards, validateDeck, validateLocalization, validateReview } from "../scripts/lib/schema.mjs";

const FIX = fileURLToPath(new URL("./fixtures/mini-deck", import.meta.url));
const facts = loadLanguageFacts();
const folder = () => loadFolder(FIX);

test("the mini deck validates cleanly", () => {
  const f = folder();
  assert.deepEqual(validateDeck(f.deck), []);
  assert.deepEqual(validateCards(f.cards, { facts, learningLanguage: "de" }), []);
  assert.deepEqual(validateLocalization(f.localization, f.cards), []);
  assert.deepEqual(validateReview(f.review, f.cards), []);
});

test("deck.json: direction must be derived, languages must differ, id must carry the learning code", () => {
  const d = folder().deck;
  assert.match(validateDeck({ ...d, direction: "de-to-en-US" }).join(";"), /direction must be derived/);
  assert.match(validateDeck({ ...d, knownLanguage: "de" }).join(";"), /must differ/);
  assert.match(validateDeck({ ...d, id: "fr-greetings" }).join(";"), /should start with the learning language code/);
  assert.match(validateDeck({ ...d, level: "A0" }).join(";"), /level/);
});

test("cards.json: grammar fields follow the language facts, keys are derived, two sentences, tokens cover", () => {
  const c = folder().cards;
  const noun = { ...c[0], key: "Haus|das|noun", text: "Haus", partOfSpeech: "noun", article: null, gender: null };
  const p = validateCards([noun, c[1]], { facts, learningLanguage: "de" }).join(";");
  assert.match(p, /article is required for a de noun/);
  assert.match(p, /gender is required for a de noun/);
  assert.match(
    validateCards([{ ...c[0], key: "wrong" }, c[1]], { facts, learningLanguage: "de" }).join(";"),
    /key must be text\|article\|partOfSpeech/,
  );
  assert.match(
    validateCards([{ ...c[0], examples: c[0].examples.slice(0, 1) }, c[1]], { facts, learningLanguage: "de" }).join(
      ";",
    ),
    /exactly two example sentences/,
  );
  const dropped = {
    ...c[0],
    examples: [{ ...c[0].examples[0], tokens: c[0].examples[0].tokens.slice(1) }, c[0].examples[1]],
  };
  assert.match(
    validateCards([dropped, c[1]], { facts, learningLanguage: "de" }).join(";"),
    /word 'Hallo' has no token/,
  );
  assert.match(
    validateCards([{ ...c[0], phonetic: "" }, c[1]], { facts, learningLanguage: "de" }).join(";"),
    /phonetic \(IPA\) is required/,
  );
  assert.match(
    validateCards([{ ...c[0], romanization: null }], { facts, learningLanguage: "ja" }).join(";"),
    /romanization is required for ja/,
  );
  assert.match(
    validateCards([{ ...c[1], sticker: { mode: "text-first", file: "stickers/x.png" } }], {
      facts,
      learningLanguage: "de",
    }).join(";"),
    /text-first card must not reference/,
  );
});

test("localization: aligned by key, example and token; one to three meanings", () => {
  const f = folder();
  assert.match(
    validateLocalization(f.localization.slice(1), f.cards).join(";"),
    /Hallo\|\|interjection: no localization entry/,
  );
  const fewer = f.localization.map((l) => ({
    ...l,
    examples: l.examples.map((e) => ({ ...e, tokens: e.tokens.slice(1) })),
  }));
  assert.match(validateLocalization(fewer, f.cards).join(";"), /token meanings for/);
  const empty = f.localization.map((l) => ({
    ...l,
    examples: l.examples.map((e) => ({ ...e, tokens: e.tokens.map(() => ({ meanings: [] })) })),
  }));
  assert.match(validateLocalization(empty, f.cards).join(";"), /one to three meanings/);
});

test("review: every sticker card must be approved", () => {
  const f = folder();
  assert.match(validateReview({ stickers: {} }, f.cards).join(";"), /Hallo\|\|interjection: sticker is not approved/);
  assert.deepEqual(validateReview({ stickers: { "Hallo||interjection": "approved" } }, f.cards), []);
});
