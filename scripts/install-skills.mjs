// Copies the six skills into the places Claude Code and Codex read user skills from,
// with this kit's path written into every command, so the skills work from any folder.
//   node scripts/install-skills.mjs [--claude] [--codex] [--home <dir>]
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function installSkills({ home = os.homedir(), claude = true, codex = true } = {}) {
  const targets = [];
  if (claude) targets.push(path.join(home, ".claude", "skills"));
  if (codex) targets.push(path.join(home, ".agents", "skills"));
  const skills = readdirSync(path.join(KIT, "skills")).filter((n) => n.startsWith("deck-"));
  const done = [];
  for (const target of targets) {
    for (const name of skills) {
      const dest = path.join(target, name);
      mkdirSync(dest, { recursive: true });
      cpSync(path.join(KIT, "skills", name), dest, { recursive: true });
      const file = path.join(dest, "SKILL.md");
      const text = readFileSync(file, "utf8")
        .replace(/node scripts\/([\w-]+\.mjs)/g, `node "${path.join(KIT, "scripts", "$1")}"`)
        .replace(/from the kit's root/g, "from any folder");
      writeFileSync(file, text);
      done.push(file);
    }
  }
  return { kit: KIT, files: done, targets };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const args = process.argv.slice(2);
  const only = args.includes("--claude") || args.includes("--codex");
  const home = args.includes("--home") ? args[args.indexOf("--home") + 1] : os.homedir();
  const result = installSkills({
    home,
    claude: !only || args.includes("--claude"),
    codex: !only || args.includes("--codex"),
  });
  for (const t of result.targets) console.log(`${existsSync(t) ? "installed" : "skipped"}: ${t}`);
  console.log(
    `${result.files.length} skill files point at ${result.kit}. Restart Claude Code or Codex to pick them up.`,
  );
}
