import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

import {
  directionOf,
  fetchRegistry,
  loadLanguageFacts,
  resolveLanguage,
  validatePair,
} from "../scripts/lib/registry.mjs";

const live = { learning: ["en-US", "en-GB", "de", "ja"], known: ["en-US", "en-GB", "de"] };
const okFetch = async () => ({ ok: true, json: async () => live });
const downFetch = async () => {
  throw new Error("offline");
};

function snapshotAt(checkedAt) {
  const file = path.join(mkdtempSync(path.join(os.tmpdir(), "reg-")), "snapshot.json");
  writeFileSync(file, JSON.stringify({ checkedAt, learning: ["de"], known: ["en-US"] }));
  return file;
}

test("the live registry wins and says so", async () => {
  const r = await fetchRegistry({ fetchImpl: okFetch });
  assert.equal(r.via, "live");
  assert.deepEqual(r.learning, live.learning);
});

test("offline falls back to a fresh snapshot and refuses a stale one", async () => {
  const fresh = await fetchRegistry({
    fetchImpl: downFetch,
    snapshotPath: snapshotAt("2026-09-10"),
    now: new Date("2026-09-16"),
  });
  assert.equal(fresh.via, "snapshot");
  await assert.rejects(
    fetchRegistry({ fetchImpl: downFetch, snapshotPath: snapshotAt("2026-07-01"), now: new Date("2026-09-16") }),
    /older than 30 days/,
  );
});

test("a registry answer without the lists is not trusted", async () => {
  const bad = async () => ({ ok: true, json: async () => ({ learning: "de" }) });
  const r = await fetchRegistry({
    fetchImpl: bad,
    snapshotPath: snapshotAt("2026-09-15"),
    now: new Date("2026-09-16"),
  });
  assert.equal(r.via, "snapshot");
});

test("the pair rule is the app's: enabled on each side, different by exact code", () => {
  const facts = loadLanguageFacts();
  assert.deepEqual(validatePair({ known: "en-US", learning: "de" }, live, facts), []);
  assert.deepEqual(validatePair({ known: "en-US", learning: "en-GB" }, live, facts), []);
  assert.match(validatePair({ known: "en-US", learning: "en-US" }, live, facts)[0], /must differ/);
  assert.match(
    validatePair({ known: "ja", learning: "de" }, live, facts)[0],
    /does not offer Japanese \(ja\) as a language you speak/,
  );
  assert.match(
    validatePair({ known: "en-US", learning: "ru" }, live, facts)[0],
    /does not offer Russian \(ru\) as a language to learn/,
  );
});

test("names resolve to codes, English defaults to US", () => {
  const facts = loadLanguageFacts();
  assert.equal(resolveLanguage("German", live.learning, facts), "de");
  assert.equal(resolveLanguage("deutsch", live.learning, facts), "de");
  assert.equal(resolveLanguage("English", live.known, facts), "en-US");
  assert.equal(resolveLanguage("Klingon", live.known, facts), null);
  assert.equal(directionOf({ known: "en-US", learning: "de" }), "en-US-to-de");
});

test("the committed snapshot mirrors the live endpoint's shape", async () => {
  const { loadSnapshot } = await import("../scripts/lib/registry.mjs");
  const s = loadSnapshot();
  assert.ok(Array.isArray(s.learning) && Array.isArray(s.known) && /^\d{4}-\d{2}-\d{2}$/.test(s.checkedAt));
  const facts = loadLanguageFacts();
  for (const code of [...s.learning, ...s.known]) assert.ok(facts[code], `${code} has language facts`);
});
