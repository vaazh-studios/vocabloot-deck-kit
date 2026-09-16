// Builds dist/vocabloot-deck-kit.zip, the folder OpenAI's plugin portal and Codex expect:
// the Codex-native layout, no node_modules, no symlinked folders, no examples or tests.
import { cpSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const KIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INCLUDE = [
  ".claude-plugin",
  ".codex-plugin",
  "skills",
  "scripts",
  "prompts",
  "registry",
  "packer",
  "package.json",
  "package-lock.json",
  "README.md",
  "LICENSE",
];
const dist = path.join(KIT, "dist");
const stage = path.join(dist, "vocabloot-deck-kit");
rmSync(stage, { recursive: true, force: true });
mkdirSync(stage, { recursive: true });
for (const entry of INCLUDE) cpSync(path.join(KIT, entry), path.join(stage, entry), { recursive: true });
rmSync(path.join(stage, "scripts", "install-skills.mjs"), { force: true });
rmSync(path.join(stage, "scripts", "plugin-zip.mjs"), { force: true });
const zip = path.join(dist, "vocabloot-deck-kit.zip");
rmSync(zip, { force: true });
execFileSync("zip", ["-qr", "-X", zip, "vocabloot-deck-kit", "-x", "*.DS_Store"], { cwd: dist });
rmSync(stage, { recursive: true, force: true });
console.log(zip);
