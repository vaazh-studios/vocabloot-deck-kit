// Reads and writes a deck folder (deck kit spec section 5).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export function readJson(file) {
  return JSON.parse(readFileSync(file, "utf8"));
}

export function writeJson(file, value) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(value, null, 2) + "\n");
}

export function loadFolder(dir) {
  const deckPath = path.join(dir, "deck.json");
  if (!existsSync(deckPath)) throw new Error(`${dir} has no deck.json; run /deck-create first`);
  const deck = readJson(deckPath);
  const cardsPath = path.join(dir, "cards.json");
  const cards = existsSync(cardsPath) ? readJson(cardsPath) : null;
  const locPath = path.join(dir, "localizations", `${deck.knownLanguage}.json`);
  const localization = existsSync(locPath) ? readJson(locPath) : null;
  const reviewPath = path.join(dir, "review", "review.json");
  const review = existsSync(reviewPath) ? readJson(reviewPath) : { stickers: {} };
  const wordsPath = path.join(dir, "words.json");
  const words = existsSync(wordsPath) ? readJson(wordsPath) : null;
  const promptsPath = path.join(dir, "prompts", "stickers.json");
  const stickerPrompts = existsSync(promptsPath) ? readJson(promptsPath) : null;
  return { dir, deck, cards, localization, review, words, stickerPrompts };
}

export function stickerExists(dir, card) {
  return Boolean(card.sticker?.file) && existsSync(path.join(dir, card.sticker.file));
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}
