// Token rules, the same the app applies (shared/reading validateTokens) plus
// the kit's coverage rule: every word of the sentence must lie inside a token.

/** Tokens in order, non-overlapping, each an exact substring of the sentence at [start, end). */
export function validateTokens(source, tokens) {
  let previousEnd = 0;
  for (const t of tokens) {
    if (!Number.isInteger(t.start) || !Number.isInteger(t.end)) return false;
    if (t.start < previousEnd) return false;
    if (t.start >= t.end || t.end > source.length) return false;
    if (source.slice(t.start, t.end) !== t.text) return false;
    previousEnd = t.end;
  }
  return true;
}

const WORD_CHAR = /[\p{L}\p{N}\p{M}]/u;
const JOINER = /['’\-]/;

/** Words (runs of letters, digits, marks, with apostrophes and hyphens inside) that no token covers. */
export function uncoveredWords(source, tokens) {
  const out = [];
  const chars = [...source];
  let i = 0;
  while (i < chars.length) {
    if (!WORD_CHAR.test(chars[i])) {
      i += 1;
      continue;
    }
    let j = i;
    while (j < chars.length && (WORD_CHAR.test(chars[j]) || JOINER.test(chars[j]))) j += 1;
    // Offsets in the schema are UTF-16 code units, like the app's; map from code points.
    const start = chars.slice(0, i).join("").length;
    const end = chars.slice(0, j).join("").length;
    if (!tokens.some((t) => t.start <= start && t.end >= end)) out.push(chars.slice(i, j).join(""));
    i = j;
  }
  return out;
}

/** Every problem with one sentence's tokens, for the report and the check. */
export function tokenProblems(source, tokens) {
  if (!validateTokens(source, tokens)) return ["tokens do not reproduce the sentence (offsets or order)"];
  return uncoveredWords(source, tokens).map((w) => `word '${w}' has no token`);
}

/** Rebuilds offsets for a model answer that gave tokens without them: first exact match after the previous token. */
export function assignOffsets(source, tokens) {
  let cursor = 0;
  return tokens.map((t) => {
    const at = source.indexOf(t.text, cursor);
    if (at < 0) return { ...t, start: -1, end: -1 };
    cursor = at + t.text.length;
    return { ...t, start: at, end: cursor };
  });
}

/**
 * Tokens an assistant filled in without doing the work: every token tagged "other",
 * or a meaning that is just the word itself when the two languages differ. A proper
 * noun (capitalised, lemma equal to its text, tagged noun) may keep its own name.
 */
export function lazyTokenProblems(tokens, meanings, { sameLanguage = false } = {}) {
  const problems = [];
  const words = tokens.filter((t) => /\p{L}/u.test(t.text));
  if (words.length >= 2) {
    const other = words.filter((t) => !t.partOfSpeech || t.partOfSpeech === "other").length;
    if (other * 2 > words.length)
      problems.push(`${other} of ${words.length} tokens are tagged "other"; tag each with its part of speech`);
  }
  if (!sameLanguage) {
    const untranslated = [];
    words.forEach((t, i) => {
      const m = meanings?.[i] ?? [];
      const isName = t.partOfSpeech === "noun" && /^\p{Lu}/u.test(t.text) && (t.lemma ?? t.text) === t.text;
      if (m.length === 1 && m[0].trim().toLowerCase() === t.text.toLowerCase() && !isName) untranslated.push(t.text);
    });
    // One echo may be a cognate (en "name", de "Name"); two in one sentence is a shortcut.
    if (untranslated.length >= 2)
      problems.push(
        `meaning equals the word for ${untranslated
          .slice(0, 3)
          .map((w) => `'${w}'`)
          .join(
            ", ",
          )}${untranslated.length > 3 ? ` and ${untranslated.length - 3} more` : ""}; give the meaning in the known language`,
      );
  }
  return problems;
}
