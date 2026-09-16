import assert from "node:assert/strict";
import { test } from "node:test";

import {
  assignOffsets,
  lazyTokenProblems,
  tokenProblems,
  uncoveredWords,
  validateTokens,
} from "../scripts/lib/tokens.mjs";

const s = "Hallo, wie geht es dir?";
const t = (text, start) => ({ text, start, end: start + text.length });

test("validateTokens accepts ordered exact substrings and rejects anything else", () => {
  assert.ok(validateTokens(s, [t("Hallo", 0), t("wie", 7), t("geht", 11)]));
  assert.ok(!validateTokens(s, [t("Hallo", 1)]));
  assert.ok(!validateTokens(s, [t("wie", 7), t("Hallo", 0)]));
  assert.ok(!validateTokens(s, [{ text: "Hallo", start: 0, end: 99 }]));
});

test("every word needs a token, punctuation does not, joiners stay inside a word", () => {
  assert.deepEqual(uncoveredWords(s, [t("Hallo", 0), t("wie", 7), t("geht", 11), t("es", 16), t("dir", 19)]), []);
  assert.deepEqual(uncoveredWords(s, [t("Hallo", 0), t("geht", 11)]), ["wie", "es", "dir"]);
  assert.deepEqual(uncoveredWords("Wie geht's?", [t("Wie", 0), t("geht's", 4)]), []);
  assert.deepEqual(uncoveredWords("Größe über Länge", [t("Größe", 0), t("Länge", 11)]), ["über"]);
});

test("tokenProblems reports offsets first, then coverage", () => {
  assert.deepEqual(tokenProblems(s, [t("Hallo", 1)]), ["tokens do not reproduce the sentence (offsets or order)"]);
  assert.deepEqual(tokenProblems(s, [t("Hallo", 0)]), [
    "word 'wie' has no token",
    "word 'geht' has no token",
    "word 'es' has no token",
    "word 'dir' has no token",
  ]);
});

test("assignOffsets rebuilds offsets in order and marks what it cannot find", () => {
  const out = assignOffsets("Das Haus ist alt.", [{ text: "Das" }, { text: "Haus" }, { text: "neu" }]);
  assert.deepEqual(
    out.map((x) => [x.start, x.end]),
    [
      [0, 3],
      [4, 8],
      [-1, -1],
    ],
  );
});

test("lazy tokens are named: a sentence tagged all other, or a meaning that is just the word; names may keep their name", () => {
  const tokens = [
    { text: "Hello", lemma: "hello", partOfSpeech: "other" },
    { text: "my", lemma: "my", partOfSpeech: "other" },
    { text: "name", lemma: "name", partOfSpeech: "other" },
    { text: "Anna", lemma: "Anna", partOfSpeech: "noun" },
  ];
  const meanings = [["hello"], ["mein"], ["name"], ["Anna"]];
  const p = lazyTokenProblems(tokens, meanings);
  assert.match(p[0], /3 of 4 tokens are tagged "other"/);
  assert.match(p[1], /meaning equals the word for 'Hello', 'name'/);
  assert.deepEqual(
    lazyTokenProblems(tokens, meanings, { sameLanguage: true }).length,
    1,
    "same-language decks may echo the word",
  );
  const good = [
    { text: "Hello", lemma: "hello", partOfSpeech: "interjection" },
    { text: "Anna", lemma: "Anna", partOfSpeech: "noun" },
  ];
  assert.deepEqual(lazyTokenProblems(good, [["Hallo"], ["Anna"]]), []);
  const cognate = [
    { text: "My", lemma: "my", partOfSpeech: "pronoun" },
    { text: "name", lemma: "name", partOfSpeech: "noun" },
  ];
  assert.deepEqual(lazyTokenProblems(cognate, [["mein"], ["Name"]]), [], "one cognate is not a shortcut");
});
