// Loads a prompt file, reads its promptVersion, fills {placeholders}.
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const PROMPTS_DIR = path.join(HERE, "..", "..", "prompts");

export function loadPrompt(name, { file = null } = {}) {
  const text = readFileSync(file ?? path.join(PROMPTS_DIR, `${name}.md`), "utf8");
  const version = /promptVersion:\s*([\w.-]+)/.exec(text)?.[1] ?? "unversioned";
  const body = text.replace(/<!--[\s\S]*?-->\s*/g, "").trim();
  return { version, body };
}

export function fill(body, values) {
  return body.replace(/\{(\w+)\}/g, (m, k) => (k in values ? String(values[k]) : m));
}

/** The grammar lines a language needs, from registry/languages.json facts. */
export function grammarRules(facts, learning) {
  const f = facts[learning] ?? {};
  const lines = [];
  if (f.hasArticles && f.hasGender)
    lines.push(
      `- For a noun: article (the definite article), gender (masculine, feminine or neuter) and plural are required; for anything else they are null.`,
    );
  else if (f.hasGender)
    lines.push(`- For a noun: gender (masculine, feminine or neuter) and plural are required; article is null.`);
  else
    lines.push(
      `- article and gender are null for this language; plural only where the word has a distinct plural form.`,
    );
  if (f.needsRomanization) lines.push(`- romanization is required: the standard Latin transcription of the headword.`);
  else lines.push(`- romanization is null.`);
  return lines.join("\n");
}

/** The strict JSON schema of one generated card (deck kit spec section 6). */
export const CARD_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "text",
    "article",
    "gender",
    "plural",
    "partOfSpeech",
    "phonetic",
    "romanization",
    "translation",
    "stickerMode",
    "stickerConcept",
    "examples",
    "confidence",
    "childSafe",
    "notes",
  ],
  properties: {
    text: { type: "string" },
    article: { type: ["string", "null"] },
    gender: { type: ["string", "null"], enum: ["masculine", "feminine", "neuter", null] },
    plural: { type: ["string", "null"] },
    partOfSpeech: {
      type: "string",
      enum: [
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
      ],
    },
    phonetic: { type: "string" },
    romanization: { type: ["string", "null"] },
    translation: { type: "string" },
    stickerMode: { type: "string", enum: ["sticker", "symbolic", "contextual", "text-first"] },
    stickerConcept: { type: "string" },
    examples: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["source", "target", "tokens"],
        properties: {
          source: { type: "string" },
          target: { type: "string" },
          tokens: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              required: ["text", "lemma", "partOfSpeech", "grammarCodes", "meanings", "article", "gender", "plural"],
              properties: {
                text: { type: "string" },
                lemma: { type: "string" },
                partOfSpeech: { type: "string" },
                grammarCodes: { type: "array", items: { type: "string" } },
                meanings: { type: "array", items: { type: "string" }, minItems: 1, maxItems: 3 },
                article: { type: ["string", "null"] },
                gender: { type: ["string", "null"] },
                plural: { type: ["string", "null"] },
              },
            },
          },
        },
      },
    },
    confidence: { type: "string", enum: ["high", "medium", "low"] },
    childSafe: { type: "boolean" },
    notes: { type: "string" },
  },
};

export const WORDS_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["words"],
  properties: {
    words: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["word", "article", "hint"],
        properties: { word: { type: "string" }, article: { type: ["string", "null"] }, hint: { type: "string" } },
      },
    },
  },
};

export const VERIFY_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["natural", "levelOk", "correct", "safe", "issue"],
  properties: {
    natural: { type: "boolean" },
    levelOk: { type: "boolean" },
    correct: { type: "boolean" },
    safe: { type: "boolean" },
    issue: { type: "string" },
  },
};
