#!/usr/bin/env node
// /deck-stickers: sticker modes and prompts for any image model, images through
// the chosen provider, mechanical and vision checks, the contact sheet, and the
// preparation of approved stickers (deck kit spec section 7).
//
//   node scripts/stickers.mjs <deck-folder> [--provider openai|none] [--agent] [--force <key>] [--approve <key>] [--reject <key>] [--defer <key>] [--no-vision]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { apiKey } from "./lib/env.mjs";
import { loadFolder, today, writeJson } from "./lib/folder.mjs";
import { checkSticker, prepareSticker, renderSheet } from "./lib/images.mjs";
import { describeOpen } from "./lib/agent.mjs";
import { makeClient } from "./lib/openai.mjs";
import { fill, loadPrompt } from "./lib/prompts.mjs";
import { slugify } from "./create.mjs";

/**
 * Function words never get imagery, whatever the model said; the rest keep the model's call.
 * A phrase or an interjection is not on this list on purpose: "Guten Morgen" has a picture
 * (a rising sun), it is the symbolic mode's job to find it.
 */
export const TEXT_FIRST_POS = new Set([
  "article",
  "preposition",
  "conjunction",
  "particle",
  "determiner",
  "pronoun",
  "adverb",
  "numeral",
]);

export function modeFor(card) {
  if (TEXT_FIRST_POS.has(card.partOfSpeech)) return "text-first";
  return card.sticker?.mode ?? "text-first";
}

/** The facets rotate over the people-stickers in card order. */
export function facets() {
  const { body } = loadPrompt("facets");
  return body
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
}

const PEOPLE = /\b(person|people|man|woman|child|boy|girl|someone|hand|hands|face|friend|teacher|customer|waiter)\b/i;

export function stickerPrompt({ mode, concept, facet, template }) {
  const style = template
    .split("\n\nNegative:")[0]
    .replace(/^Vocabloot sticker style, for any image model:\s*/i, "")
    .trim()
    .replace(/^"|"$/g, "");
  const contextual =
    mode === "contextual"
      ? `${concept}, shown as a clear contrast or a small scene that makes the meaning unmistakable`
      : mode === "symbolic"
        ? `${concept}, as one simple symbol anyone reads without words, no text, no letters`
        : concept;
  const prompt = fill(style, { concept: contextual, facet: facet ?? "" })
    .replace(/\s+/g, " ")
    .trim();
  const negative = /Negative:\s*(.*)/.exec(template)?.[1]?.trim() ?? "";
  return { prompt, negative };
}

export async function runStickers(
  dir,
  { provider = "none", client = null, force = [], vision = true, log = console.log } = {},
) {
  const folder = loadFolder(dir);
  const { deck, cards, localization } = folder;
  if (!cards) throw new Error("cards.json is missing; run /deck-text first");
  const loc = new Map((localization ?? []).map((l) => [l.key, l]));
  const template = loadPrompt("stickers").body;
  const visionPrompt = loadPrompt("vision").body;
  const review = folder.review?.stickers ? folder.review : { stickers: {} };
  const allFacets = facets();
  let facetIndex = 0;
  const prompts = [];
  const items = [];
  mkdirSync(path.join(dir, "stickers", "source"), { recursive: true });
  mkdirSync(path.join(dir, "stickers"), { recursive: true });
  mkdirSync(path.join(dir, "review"), { recursive: true });
  const providerModule =
    provider === "openai" ? await import("./lib/providers/openai.mjs") : await import("./lib/providers/none.mjs");

  for (const card of cards) {
    const mode = modeFor(card);
    const l = loc.get(card.key);
    const slug = slugify(card.text);
    const sourceFile = `stickers/source/${slug}.png`;
    const status = review.stickers[card.key]?.status ?? review.stickers[card.key];
    // An approved sticker keeps the file name it was approved under, however the word slugs today.
    const preparedFile =
      (status === "approved" && (review.stickers[card.key]?.file || card.sticker?.file)) || `stickers/${slug}.png`;
    const entry = {
      key: card.key,
      mode,
      concept: mode === "text-first" ? "" : (card.sticker?.concept ?? ""),
      prompt: "",
      negative: "",
      facet: null,
      status: "none",
    };
    if (mode === "text-first") {
      card.sticker = { mode: "text-first", file: null, concept: "" };
      entry.note = "no honest picture: the text is the card";
      prompts.push(entry);
      continue;
    }
    // A symbol stays a symbol: representation facets only rotate over pictures of people.
    const facet = mode !== "symbolic" && PEOPLE.test(entry.concept) ? allFacets[facetIndex++ % allFacets.length] : null;
    const { prompt, negative } = stickerPrompt({ mode, concept: entry.concept, facet, template });
    Object.assign(entry, { prompt, negative, facet });

    // Deferred by the creator: the picture idea stays in the prompt, the card ships text-only for now.
    if (status === "deferred" && !force.includes(card.key) && !existsSync(path.join(dir, sourceFile))) {
      entry.status = "deferred";
      card.sticker = { mode, file: null, concept: entry.concept };
      card.review.flags = (card.review.flags ?? []).filter((f) => !f.startsWith("sticker"));
      items.push({ ...entry, text: card.text, translation: l?.translation ?? "", file: null, problems: [] });
      prompts.push(entry);
      continue;
    }
    const approved = status === "approved" && existsSync(path.join(dir, preparedFile));
    if (approved && !force.includes(card.key)) {
      entry.status = "approved";
      card.sticker = { mode, file: preparedFile, concept: entry.concept };
      card.review.flags = (card.review.flags ?? []).filter((f) => !f.startsWith("sticker"));
      items.push({ ...entry, text: card.text, translation: l?.translation ?? "", file: preparedFile, problems: [] });
      prompts.push(entry);
      continue;
    }
    // --force re-checks an approved sticker; with a real provider it also regenerates the image.
    const regenerate = force.includes(card.key) && provider !== "none";
    let source =
      existsSync(path.join(dir, sourceFile)) && !regenerate ? readFileSync(path.join(dir, sourceFile)) : null;
    if (!source) {
      const generated = await providerModule.generate({ client, key: `image:${deck.id}:${card.key}`, prompt });
      if (generated) {
        writeFileSync(path.join(dir, sourceFile), generated);
        source = generated;
        log(`stickers: generated ${sourceFile}`);
      }
    }
    if (!source) {
      entry.status = "missing";
      // The intended mode stays: the creator decides on the sheet, the packer waits.
      card.sticker = { mode, file: null, concept: entry.concept };
      card.review.flags = [...new Set([...(card.review.flags ?? []), "sticker-missing"])];
      items.push({
        ...entry,
        text: card.text,
        translation: l?.translation ?? "",
        file: null,
        problems: ["no image in " + sourceFile],
      });
      prompts.push(entry);
      continue;
    }
    const check = await checkSticker(source);
    let visionResult = null;
    if (vision && client && check.ok) {
      visionResult = await client.vision({
        key: `vision:${deck.id}:${card.key}`,
        prompt: fill(visionPrompt, {
          text: card.text,
          translation: l?.translation ?? "",
          concept: entry.concept,
          mode,
        }),
        pngBase64: source.toString("base64"),
        imagePath: sourceFile,
      });
    }
    const failed = !check.ok || (visionResult && !visionResult.depicts);
    entry.status = failed ? "failed" : "pending";
    card.review.flags = (card.review.flags ?? []).filter((f) => !f.startsWith("sticker"));
    if (failed)
      card.review.flags.push(
        `sticker-${!check.ok ? "check" : "vague"}: ${!check.ok ? check.problems[0] : visionResult.reason}`,
      );
    else card.review.flags.push("sticker-pending-review");
    card.sticker = { mode, file: null, concept: entry.concept };
    review.stickers[card.key] = { status: entry.status, checks: check.problems, vision: visionResult, at: today() };
    items.push({
      ...entry,
      text: card.text,
      translation: l?.translation ?? "",
      file: sourceFile,
      problems: check.problems,
      vision: visionResult,
    });
    prompts.push(entry);
  }
  writeJson(path.join(dir, "prompts", "stickers.json"), prompts);
  writeJson(path.join(dir, "review", "review.json"), review);
  writeJson(path.join(dir, "cards.json"), cards);
  writeFileSync(path.join(dir, "review", "stickers.html"), renderSheet({ deck, items }));
  return {
    items,
    open: client?.isAgent && (client.missing.length || client.rejected.length) ? describeOpen(client, dir) : null,
    pending: items.filter((i) => i.status === "pending").length,
    failed: items.filter((i) => i.status === "failed" || i.status === "missing").length,
    deferred: items.filter((i) => i.status === "deferred").length,
  };
}

/**
 * A creator's decision. approve prepares the sticker into stickers/ and clears the flag; reject makes the
 * card text-first; defer keeps the picture idea and ships the card text-only until an image is approved.
 */
export async function decide(dir, key, decision) {
  const folder = loadFolder(dir);
  const card = folder.cards?.find((c) => c.key === key);
  if (!card) throw new Error(`no card with key ${key}`);
  const slug = slugify(card.text);
  const sourceFile = path.join(dir, "stickers", "source", `${slug}.png`);
  const review = folder.review?.stickers ? folder.review : { stickers: {} };
  const current = review.stickers[key] ?? {};
  if (decision === "deferred") {
    const mode = modeFor(card);
    card.sticker = { mode: mode === "text-first" ? "sticker" : mode, file: null, concept: card.sticker?.concept ?? "" };
  } else if (decision === "approved") {
    if (!existsSync(sourceFile))
      throw new Error(`${key}: no source image to approve (${path.relative(dir, sourceFile)})`);
    const prepared = await prepareSticker(readFileSync(sourceFile));
    writeFileSync(path.join(dir, "stickers", `${slug}.png`), prepared);
    card.sticker = {
      mode: modeFor(card) === "text-first" ? "sticker" : modeFor(card),
      file: `stickers/${slug}.png`,
      concept: card.sticker?.concept ?? "",
    };
    current.file = card.sticker.file;
  } else {
    card.sticker = { mode: "text-first", file: null, concept: "" };
  }
  card.review.flags = (card.review.flags ?? []).filter((f) => !f.startsWith("sticker"));
  review.stickers[key] = { ...current, status: decision, by: "creator", at: today() };
  writeJson(path.join(dir, "review", "review.json"), review);
  writeJson(path.join(dir, "cards.json"), folder.cards);
  return card.sticker;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const dir = args.find((a) => !a.startsWith("--"));
  if (!dir) {
    console.error(
      "usage: node scripts/stickers.mjs <deck-folder> [--provider openai|none] [--force <key>] [--approve <key>] [--reject <key>] [--defer <key>] [--no-vision]",
    );
    process.exit(2);
  }
  const opt = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
  try {
    if (opt("--approve") || opt("--reject") || opt("--defer")) {
      const key = opt("--approve") ?? opt("--reject") ?? opt("--defer");
      const decision = opt("--approve") ? "approved" : opt("--reject") ? "rejected" : "deferred";
      const sticker = await decide(dir, key, decision);
      const said = {
        approved: `approved, prepared as ${sticker.file}`,
        rejected: "rejected, the card is text-first",
        deferred: "deferred, the card ships text-only until a sticker is approved",
      };
      console.log(`${key}: ${said[decision]}`);
      process.exit(0);
    }
    const provider = opt("--provider") ?? "none";
    const needsClient = provider === "openai" || !args.includes("--no-vision");
    const client = needsClient
      ? makeClient({
          apiKey: apiKey({ deckDir: dir }),
          agent: args.includes("--agent"),
          workDir: path.join(dir, "work"),
        })
      : null;
    if (provider === "openai" && client?.isAgent)
      throw new Error(
        "--provider openai needs OPENAI_API_KEY in your environment or a .env file. Without a key, run --provider none and make the images with any tool (prompts in prompts/stickers.json, files to stickers/source/<slug>.png).",
      );
    const force = args.flatMap((a, i) => (a === "--force" ? [args[i + 1]] : []));
    const result = await runStickers(dir, { provider, client, force, vision: !args.includes("--no-vision") });
    console.log(
      `${result.items.length} sticker cards: ${result.pending} to review, ${result.failed} failed or missing, ${result.deferred} deferred. Open ${path.join(dir, "review", "stickers.html")} and approve, reject or defer each one.`,
    );
    if (result.open) {
      console.log(result.open.join("\n"));
      process.exit(3);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
