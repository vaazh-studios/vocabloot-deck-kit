// Validators for the deck folder (deck kit spec sections 5 and 6). Each returns
// a list of human-readable problems; [] means valid. Hand-written so the kit
// has no validator dependency and every message names the card key.
import { tokenProblems } from "./tokens.mjs";

export const DECK_ID = /^[a-z]{2}(-[a-z]{2})?-[a-z0-9-]{1,40}$/;
export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const STICKER_MODES = ["sticker", "symbolic", "contextual", "text-first"];
export const CONFIDENCE = ["high", "medium", "low"];
export const PARTS_OF_SPEECH = [
  "noun",
  "verb",
  "adjective",
  "adverb",
  "pronoun",
  "preposition",
  "conjunction",
  "numeral",
  "interjection",
  "phrase",
  "particle",
  "article",
  "determiner",
  "other",
];
export const LICENCES = ["CC-BY-SA-4.0", "CC-BY-4.0", "CC-BY-NC-SA-4.0", "CC0-1.0"];

const isStr = (v, min = 1, max = 2000) => typeof v === "string" && v.length >= min && v.length <= max;
const isDate = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v);

export function keyOf(card) {
  return `${card.text}|${card.article ?? ""}|${card.partOfSpeech ?? ""}`;
}

export function validateDeck(deck) {
  const p = [];
  if (!deck || typeof deck !== "object") return ["deck.json must be an object"];
  if (deck.schemaVersion !== 1) p.push("deck.schemaVersion must be 1");
  if (!DECK_ID.test(deck.id ?? ""))
    p.push("deck.id must look like de-greetings (learning language code, dash, topic slug)");
  if (!isStr(deck.name, 1, 80)) p.push("deck.name is required (up to 80 characters)");
  if (!isStr(deck.description, 0, 400)) p.push("deck.description must be a string (up to 400 characters)");
  if (!isStr(deck.learningLanguage, 2, 6)) p.push("deck.learningLanguage is required");
  if (!isStr(deck.knownLanguage, 2, 6)) p.push("deck.knownLanguage is required");
  if (deck.learningLanguage && deck.knownLanguage && deck.learningLanguage === deck.knownLanguage)
    p.push("learningLanguage and knownLanguage must differ");
  if (deck.learningLanguage && deck.knownLanguage) {
    const derived = `${deck.knownLanguage}-to-${deck.learningLanguage}`;
    if (deck.direction !== derived) p.push(`deck.direction must be derived from the two languages: ${derived}`);
    if (
      deck.id &&
      !deck.id.startsWith(`${deck.learningLanguage.toLowerCase()}-`) &&
      !deck.id.startsWith(`${deck.learningLanguage.slice(0, 2).toLowerCase()}-`)
    ) {
      p.push(
        `deck.id should start with the learning language code (${deck.learningLanguage.slice(0, 2).toLowerCase()}-)`,
      );
    }
  }
  if (!LEVELS.includes(deck.level)) p.push(`deck.level must be one of ${LEVELS.join(", ")}`);
  if (deck.topic != null && !isStr(deck.topic, 1, 60)) p.push("deck.topic must be a short string");
  if (!Number.isInteger(deck.wordCount) || deck.wordCount < 1) p.push("deck.wordCount must be a positive integer");
  if (!isStr(deck.author, 1, 60)) p.push("deck.author is required (up to 60 characters)");
  if (!LICENCES.includes(deck.licence)) p.push(`deck.licence must be one of ${LICENCES.join(", ")}`);
  if (!isDate(deck.createdAt)) p.push("deck.createdAt must be YYYY-MM-DD");
  if (!isDate(deck.updatedAt)) p.push("deck.updatedAt must be YYYY-MM-DD");
  return p;
}

function validateToken(t, where, p) {
  if (!isStr(t?.text, 1, 80)) p.push(`${where}: token text is required`);
  if (!Number.isInteger(t?.start) || !Number.isInteger(t?.end))
    p.push(`${where}: token start and end must be integers`);
  if (t?.lemma != null && !isStr(t.lemma, 1, 80)) p.push(`${where}: token lemma must be a string`);
  if (t?.partOfSpeech != null && !PARTS_OF_SPEECH.includes(t.partOfSpeech))
    p.push(`${where}: token partOfSpeech '${t.partOfSpeech}' is not in the list`);
  if (t?.grammarCodes != null && (!Array.isArray(t.grammarCodes) || t.grammarCodes.some((g) => !isStr(g, 1, 40))))
    p.push(`${where}: token grammarCodes must be short strings`);
}

/** cards.json, with the language facts deciding which grammar fields are required. */
export function validateCards(cards, { facts = {}, learningLanguage = "", deferred = new Set() } = {}) {
  const p = [];
  if (!Array.isArray(cards) || cards.length === 0) return ["cards.json must be a non-empty array"];
  const f = facts[learningLanguage] ?? {};
  const keys = new Set();
  cards.forEach((c, i) => {
    const where = c?.key ?? `cards[${i}]`;
    if (!isStr(c?.key, 3, 200)) p.push(`cards[${i}]: key is required`);
    else if (keys.has(c.key)) p.push(`${where}: duplicate key`);
    else keys.add(c.key);
    if (!isStr(c?.text, 1, 120)) p.push(`${where}: text is required`);
    if (c?.key && c?.text && c.key !== keyOf(c))
      p.push(`${where}: key must be text|article|partOfSpeech (${keyOf(c)})`);
    if (c?.partOfSpeech != null && !PARTS_OF_SPEECH.includes(c.partOfSpeech))
      p.push(`${where}: partOfSpeech '${c.partOfSpeech}' is not in the list`);
    if (!isStr(c?.phonetic, 0, 120)) p.push(`${where}: phonetic must be a string`);
    else if (c.phonetic === "" && c?.review?.flags?.includes("no-phonetic") !== true)
      p.push(`${where}: phonetic (IPA) is required; flag no-phonetic to make the omission deliberate`);
    if (f.needsRomanization && !isStr(c?.romanization, 1, 120))
      p.push(`${where}: romanization is required for ${learningLanguage}`);
    if (f.hasGender && c?.partOfSpeech === "noun") {
      if (!isStr(c?.article, 1, 20)) p.push(`${where}: article is required for a ${learningLanguage} noun`);
      if (!isStr(c?.gender, 1, 20)) p.push(`${where}: gender is required for a ${learningLanguage} noun`);
    }
    const s = c?.sticker;
    if (!s || !STICKER_MODES.includes(s.mode))
      p.push(`${where}: sticker.mode must be one of ${STICKER_MODES.join(", ")}`);
    else if (s.mode === "text-first" && s.file) p.push(`${where}: a text-first card must not reference a sticker file`);
    else if (s.mode !== "text-first" && !isStr(s.file, 1, 200) && !deferred.has(c?.key))
      p.push(`${where}: sticker not approved yet; run /deck-stickers and approve, reject or defer it`);
    else if (s.mode !== "text-first" && !isStr(s.concept, 3, 200))
      p.push(`${where}: sticker.concept (what the picture shows) is required for mode ${s.mode}`);
    if (!Array.isArray(c?.examples) || c.examples.length !== 2)
      p.push(`${where}: exactly two example sentences are required`);
    else {
      c.examples.forEach((ex, j) => {
        const w = `${where} example ${j + 1}`;
        if (!isStr(ex?.source, 2, 300)) p.push(`${w}: source sentence is required`);
        if (!Array.isArray(ex?.tokens) || ex.tokens.length === 0) p.push(`${w}: tokens are required`);
        else {
          ex.tokens.forEach((t, k) => validateToken(t, `${w} token ${k + 1}`, p));
          if (isStr(ex?.source)) tokenProblems(ex.source, ex.tokens).forEach((m) => p.push(`${w}: ${m}`));
          ex.tokens.forEach((t) => {
            if (!isStr(t?.lemma) && !isStr(t?.partOfSpeech))
              p.push(`${w} token '${t?.text}': lemma or partOfSpeech is required`);
          });
        }
      });
    }
    const r = c?.review;
    if (!r || !CONFIDENCE.includes(r.confidence) || typeof r.safe !== "boolean" || !Array.isArray(r.flags)) {
      p.push(`${where}: review needs confidence (high, medium, low), safe (boolean) and flags (array)`);
    }
  });
  return p;
}

/** localizations/<known>.json against the cards it localizes. */
export function validateLocalization(loc, cards) {
  const p = [];
  if (!Array.isArray(loc)) return ["localization must be an array"];
  const byKey = new Map(loc.map((l) => [l?.key, l]));
  if (byKey.size !== loc.length) p.push("localization has duplicate keys");
  for (const c of cards ?? []) {
    const l = byKey.get(c.key);
    if (!l) {
      p.push(`${c.key}: no localization entry`);
      continue;
    }
    if (!isStr(l.translation, 1, 200)) p.push(`${c.key}: translation is required`);
    if (!Array.isArray(l.examples) || l.examples.length !== (c.examples?.length ?? 0)) {
      p.push(`${c.key}: localization must carry one translation per example sentence`);
      continue;
    }
    l.examples.forEach((le, j) => {
      const w = `${c.key} example ${j + 1}`;
      if (!isStr(le?.target, 2, 300)) p.push(`${w}: translation is required`);
      const n = c.examples?.[j]?.tokens?.length ?? 0;
      if (!Array.isArray(le?.tokens) || le.tokens.length !== n)
        p.push(`${w}: ${le?.tokens?.length ?? 0} token meanings for ${n} tokens`);
      else {
        le.tokens.forEach((m, k) => {
          if (
            !Array.isArray(m?.meanings) ||
            m.meanings.length < 1 ||
            m.meanings.length > 3 ||
            m.meanings.some((x) => !isStr(x, 1, 80))
          ) {
            p.push(`${w} token '${c.examples[j].tokens[k]?.text}': one to three meanings are required`);
          }
        });
      }
    });
  }
  for (const l of loc)
    if (!(cards ?? []).some((c) => c.key === l?.key)) p.push(`localization entry ${l?.key} has no card`);
  return p;
}

/** review/review.json: the cards a creator deferred (ship text-only for now, keep the picture idea). */
export function deferredKeys(review) {
  return new Set(
    Object.entries(review?.stickers ?? {})
      .filter(([, v]) => (v?.status ?? v) === "deferred")
      .map(([k]) => k),
  );
}

/** review/review.json: sticker approvals; a deferred sticker is a decision too. */
export function validateReview(review, cards) {
  const p = [];
  const stickers = review?.stickers ?? {};
  for (const c of cards ?? []) {
    if (c.sticker?.mode === "text-first") continue;
    const status = stickers[c.key]?.status ?? stickers[c.key];
    if (status === "deferred") continue;
    if (status !== "approved")
      p.push(`${c.key}: sticker is not approved in review/review.json (status: ${status ?? "none"})`);
  }
  return p;
}
