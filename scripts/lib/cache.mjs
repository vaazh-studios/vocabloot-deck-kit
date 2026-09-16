// cards-cache.json: model responses keyed by a hash of everything that shaped
// the call, so reruns are free and byte-identical (deck kit spec section 6).
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";

import { readJson, writeJson } from "./folder.mjs";

export function cacheKey(parts) {
  return createHash("sha256").update(JSON.stringify(parts)).digest("hex");
}

export class ResponseCache {
  constructor(deckDir) {
    this.file = path.join(deckDir, "cards-cache.json");
    this.data = existsSync(this.file) ? readJson(this.file) : {};
  }
  get(key) {
    return this.data[key];
  }
  put(key, value, note) {
    this.data[key] = { note, value };
    writeJson(this.file, this.data);
  }
  drop(predicate) {
    for (const k of Object.keys(this.data)) if (predicate(this.data[k].note ?? "")) delete this.data[k];
    writeJson(this.file, this.data);
  }
}
