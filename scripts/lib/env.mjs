// The creator's own keys only: the environment, or a .env beside the deck folder or in the working directory.
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export function loadDotEnv(dirs) {
  const out = {};
  for (const dir of dirs) {
    const file = path.join(dir, ".env");
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
      if (m && !(m[1] in out)) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return out;
}

export function apiKey({ deckDir } = {}) {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  const env = loadDotEnv([deckDir, path.dirname(deckDir ?? "."), process.cwd()].filter(Boolean));
  return env.OPENAI_API_KEY ?? null;
}
