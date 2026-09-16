// The app's language registry: which languages a creator may pick, and which
// pairs are allowed. The live endpoint is the only source of truth; the
// snapshot is an offline fallback that goes stale on purpose.
//
//   node scripts/lib/registry.mjs            print the live registry
//   node scripts/lib/registry.mjs --refresh  rewrite registry/snapshot.json from the live endpoint
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REGISTRY_URL = "https://vocabloot.com/api/capabilities";
export const SNAPSHOT_PATH = path.join(HERE, "..", "..", "registry", "snapshot.json");
export const LANGUAGES_PATH = path.join(HERE, "..", "..", "registry", "languages.json");
export const SNAPSHOT_MAX_AGE_DAYS = 30;

export function loadLanguageFacts() {
  return JSON.parse(readFileSync(LANGUAGES_PATH, "utf8")).languages;
}

export function loadSnapshot(snapshotPath = SNAPSHOT_PATH) {
  return JSON.parse(readFileSync(snapshotPath, "utf8"));
}

function isStringArray(v) {
  return Array.isArray(v) && v.length > 0 && v.every((x) => typeof x === "string");
}

/** The live registry, or the snapshot when the endpoint is unreachable and the snapshot is fresh. Throws otherwise. */
export async function fetchRegistry({
  fetchImpl = fetch,
  snapshotPath = SNAPSHOT_PATH,
  now = new Date(),
  timeoutMs = 5000,
} = {}) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetchImpl(REGISTRY_URL, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`registry answered ${res.status}`);
    const json = await res.json();
    if (!isStringArray(json.learning) || !isStringArray(json.known))
      throw new Error("registry has no learning or known lists");
    return { learning: json.learning, known: json.known, via: "live", checkedAt: now.toISOString().slice(0, 10) };
  } catch (error) {
    const snapshot = loadSnapshot(snapshotPath);
    const ageDays = (now - new Date(snapshot.checkedAt)) / 86_400_000;
    if (!(ageDays <= SNAPSHOT_MAX_AGE_DAYS)) {
      throw new Error(
        `The Vocabloot language registry is unreachable (${error.message}) and the snapshot from ${snapshot.checkedAt} is older than ${SNAPSHOT_MAX_AGE_DAYS} days. Connect to the internet or run npm run registry:refresh.`,
      );
    }
    return { learning: snapshot.learning, known: snapshot.known, via: "snapshot", checkedAt: snapshot.checkedAt };
  }
}

/** Display name for a code, from the facts file; the code itself when unknown. */
export function nameOf(code, facts = loadLanguageFacts()) {
  return facts[code]?.name ?? code;
}

/** Accepts a name ("German", "Deutsch", "de") and returns the code, or null. */
export function resolveLanguage(input, codes, facts = loadLanguageFacts()) {
  const q = String(input ?? "")
    .trim()
    .toLowerCase();
  if (!q) return null;
  for (const code of codes) {
    const f = facts[code];
    if (code.toLowerCase() === q) return code;
    if (f && (f.name.toLowerCase() === q || f.nativeName.toLowerCase() === q)) return code;
  }
  // "English" alone is ambiguous between en-US and en-GB: prefer US, say so in the skill.
  if (q === "english") return codes.includes("en-US") ? "en-US" : codes.includes("en-GB") ? "en-GB" : null;
  return null;
}

/**
 * The pair rule the app applies: both languages must be enabled in their own
 * list and must differ by exact code (knowing en-US still allows learning en-GB).
 */
export function validatePair({ known, learning }, registry, facts = loadLanguageFacts()) {
  const problems = [];
  if (!registry.known.includes(known)) {
    problems.push(
      `Vocabloot does not offer ${nameOf(known, facts)} (${known}) as a language you speak yet. Available: ${registry.known.map((c) => nameOf(c, facts)).join(", ")}.`,
    );
  }
  if (!registry.learning.includes(learning)) {
    problems.push(
      `Vocabloot does not offer ${nameOf(learning, facts)} (${learning}) as a language to learn yet. Available: ${registry.learning.map((c) => nameOf(c, facts)).join(", ")}.`,
    );
  }
  if (known === learning) problems.push("The language you speak and the language you are learning must differ.");
  return problems;
}

export function directionOf({ known, learning }) {
  return `${known}-to-${learning}`;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const registry = await fetchRegistry();
  if (process.argv.includes("--refresh")) {
    if (registry.via !== "live") {
      console.error("registry: could not reach the live endpoint; snapshot unchanged");
      process.exit(1);
    }
    writeFileSync(
      SNAPSHOT_PATH,
      JSON.stringify(
        { source: REGISTRY_URL, checkedAt: registry.checkedAt, learning: registry.learning, known: registry.known },
        null,
        2,
      ) + "\n",
    );
    console.log(`registry: snapshot refreshed (${registry.learning.length} learning, ${registry.known.length} known)`);
  } else {
    console.log(JSON.stringify(registry, null, 2));
  }
}
