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
