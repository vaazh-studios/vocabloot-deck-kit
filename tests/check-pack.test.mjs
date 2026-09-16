import assert from "node:assert/strict";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { checkFolder, writePreview } from "../scripts/check.mjs";
import { loadFolder } from "../scripts/lib/folder.mjs";
import { PACKER, packFolder } from "../scripts/pack.mjs";

const FIX = fileURLToPath(new URL("./fixtures/mini-deck", import.meta.url));

function copy() {
  const dir = mkdtempSync(path.join(os.tmpdir(), "kit-"));
  cpSync(FIX, dir, { recursive: true });
  return dir;
}

test("check passes the mini deck and writes a preview with every card and every token", () => {
  const dir = copy();
  const folder = loadFolder(dir);
  assert.deepEqual(checkFolder(folder), []);
  const file = writePreview(folder);
  const html = readFileSync(file, "utf8");
  assert.equal((html.match(/<article class="card/g) ?? []).length, 2);
  assert.ok(html.includes('title="gehen: goes, is going"'));
  assert.ok(html.includes("text-first"));
});

test("check names each gate", () => {
  const dir = copy();
  rmSync(path.join(dir, "stickers", "hallo.png"));
  assert.match(checkFolder(loadFolder(dir)).join(";"), /sticker file stickers\/hallo.png is missing/);
  const dir2 = copy();
  writeFileSync(path.join(dir2, "review", "review.json"), "{}");
  assert.match(checkFolder(loadFolder(dir2)).join(";"), /not approved/);
  const dir3 = copy();
  const cards = JSON.parse(readFileSync(path.join(dir3, "cards.json"), "utf8"));
  cards[1].review.flags = ["vague"];
  writeFileSync(path.join(dir3, "cards.json"), JSON.stringify(cards));
  assert.match(checkFolder(loadFolder(dir3)).join(";"), /unresolved flags: vague/);
});

test("pack refuses on a gate and otherwise writes a .vlbackup with the packer", () => {
  assert.ok(existsSync(PACKER), "the packer bundle is committed");
  const bad = copy();
  rmSync(path.join(bad, "stickers", "hallo.png"));
  const refused = packFolder(bad);
  assert.equal(refused.ok, false);
  assert.match(refused.problems.join(";"), /missing/);
  const good = copy();
  const out = path.join(good, "out.vlbackup");
  const result = packFolder(good, { out });
  assert.equal(result.ok, true, result.problems?.join("\n"));
  assert.match(result.message, /packed 2 cards \(1 with stickers\)/);
  const bytes = readFileSync(out);
  assert.equal(bytes.subarray(0, 5).toString("utf8"), "SLBK1");
  assert.ok(statSync(out).size > 1000);
  const again = packFolder(good, { out: path.join(good, "again.vlbackup") });
  assert.ok(again.ok && readFileSync(path.join(good, "again.vlbackup")).equals(bytes), "deterministic bytes");
});
