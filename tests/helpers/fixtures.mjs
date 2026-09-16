// Records fixture answers the way OpenAIClient does, so FixtureClient replays them.
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

export function fixtureName(key) {
  return createHash("sha256").update(key).digest("hex").slice(0, 24) + ".json";
}

export function record(dir, key, response, request = {}) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, fixtureName(key)), JSON.stringify({ key, request, response }, null, 2) + "\n");
}

/** A CARD_SCHEMA answer rebuilt from a card and its localization entry (what the model would have said). */
export function cardAnswerFrom(card, loc) {
  return {
    text: card.text,
    article: card.article ?? null,
    gender: card.gender ?? null,
    plural: card.plural ?? null,
    partOfSpeech: card.partOfSpeech,
    phonetic: card.phonetic ?? "",
    romanization: card.romanization ?? null,
    translation: loc.translation,
    stickerMode: card.sticker.mode,
    stickerConcept: card.sticker.concept ?? "",
    examples: card.examples.map((ex, i) => ({
      source: ex.source,
      target: loc.examples[i].target,
      tokens: ex.tokens.map((t, k) => ({
        text: t.text,
        lemma: t.lemma ?? t.text,
        partOfSpeech: t.partOfSpeech ?? "other",
        grammarCodes: t.grammarCodes ?? [],
        meanings: loc.examples[i].tokens[k].meanings,
        article: t.article ?? null,
        gender: t.gender ?? null,
        plural: t.plural ?? null,
      })),
    })),
    confidence: card.review.confidence,
    childSafe: card.review.safe,
    notes: card.review.notes ?? "",
  };
}
