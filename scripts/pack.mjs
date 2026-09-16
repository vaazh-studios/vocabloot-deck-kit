#!/usr/bin/env node
// /deck-pack: the checks, then the Kotlin/JS packer (packer/, built from the app's own codec).
//
//   node scripts/pack.mjs <deck-folder> [--out <file.vlbackup>]
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { checkFolder } from "./check.mjs";
import { loadFolder } from "./lib/folder.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const PACKER = path.join(HERE, "..", "packer", "SnapLingo-web-deck-pack.js");

export function packFolder(dir, { out } = {}) {
  const folder = loadFolder(dir);
  const problems = checkFolder(folder);
  if (problems.length) return { ok: false, problems };
  const args = [PACKER, "pack", dir, ...(out ? ["--out", out] : [])];
  const run = spawnSync(process.execPath, args, { encoding: "utf8" });
  if (run.status !== 0)
    return { ok: false, problems: (run.stderr || run.stdout || "packer failed").trim().split("\n") };
  return { ok: true, message: run.stdout.trim(), file: out ?? path.join(dir, `${folder.deck.id}.vlbackup`) };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const dir = process.argv[2];
  if (!dir) {
    console.error("usage: node scripts/pack.mjs <deck-folder> [--out <file.vlbackup>]");
    process.exit(2);
  }
  const outIndex = process.argv.indexOf("--out");
  const result = packFolder(dir, { out: outIndex > 0 ? process.argv[outIndex + 1] : undefined });
  if (!result.ok) {
    console.error("Refusing to pack:");
    for (const m of result.problems) console.error(`  ${m}`);
    process.exit(1);
  }
  console.log(result.message);
  console.log(
    `Open ${result.file} with the Vocabloot app (Files, AirDrop or Mail on iPhone; the download on Android).`,
  );
}
