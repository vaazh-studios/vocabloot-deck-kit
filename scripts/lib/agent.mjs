// The agent client: the model that runs the skill (Claude Code, Codex, any agent)
// answers the kit's requests itself, so a creator needs no API key for text.
// Same interface as the OpenAI client. When an answer is missing, the call writes
// a request file the agent can read and answer, and returns null; the pipeline
// lists the open requests instead of failing. Image generation is the one thing an
// agent cannot do here, so image() says what the two real options are.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { validateAgainst } from "./jsonschema.mjs";

/** work/<kind>/<slug>: the kind is the key's prefix, the slug is the rest, made file-safe. */
export function requestPaths(workDir, key) {
  const [kind, ...rest] = key.split(":");
  if (kind === "words") rest.splice(1, rest.length, "proposal"); // one list per deck, whatever the count
  const slug = rest
    .slice(1) // the deck id
    .join("-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  const dir = path.join(workDir, kind);
  return {
    dir,
    request: path.join(dir, `${slug || "answer"}.request.md`),
    answer: path.join(dir, `${slug || "answer"}.json`),
  };
}

export class AgentClient {
  constructor(workDir) {
    this.workDir = workDir;
    /** Requests written this run, in order: { key, request, answer }. */
    this.missing = [];
    /** Answers that exist but do not match their schema: { key, answer, problems }. */
    this.rejected = [];
  }
  get isAgent() {
    return true;
  }

  read({ key, schema, sections }) {
    const paths = requestPaths(this.workDir, key);
    if (existsSync(paths.answer)) {
      let value;
      try {
        value = JSON.parse(readFileSync(paths.answer, "utf8"));
      } catch (e) {
        this.rejected.push({ key, answer: paths.answer, problems: [`not valid JSON: ${e.message}`] });
        return null;
      }
      const problems = schema ? validateAgainst(schema, value) : [];
      if (problems.length) {
        this.rejected.push({ key, answer: paths.answer, problems });
        return null;
      }
      return value;
    }
    mkdirSync(paths.dir, { recursive: true });
    writeFileSync(paths.request, renderRequest({ answerFile: paths.answer, workDir: this.workDir, schema, sections }));
    this.missing.push({ key, request: paths.request, answer: paths.answer });
    return null;
  }

  /** The same signature as OpenAIClient.chatJson; returns the parsed answer or null. */
  async chatJson({ key, system, user, schema }) {
    return this.read({
      key,
      schema,
      sections: [
        ["Instructions", system],
        ["Input", "```json\n" + pretty(user) + "\n```"],
      ],
    });
  }

  /** Asks the agent to look at the image itself; imagePath is relative to the deck folder. */
  async vision({ key, prompt, imagePath }) {
    const schema = {
      type: "object",
      additionalProperties: false,
      required: ["depicts", "reason"],
      properties: { depicts: { type: "boolean" }, reason: { type: "string" } },
    };
    return this.read({
      key,
      schema,
      sections: [
        [
          "Look at this image",
          `\`${imagePath}\` (open it and look at it before answering; do not guess from the file name)`,
        ],
        ["Question", prompt],
      ],
    });
  }

  async image() {
    throw new Error(
      "Image generation needs an image model. Either run with --provider none and make the images with any tool (the prompts are in prompts/stickers.json, files go to stickers/source/<slug>.png), or put OPENAI_API_KEY in your environment or a .env file and run with --provider openai.",
    );
  }
}

function pretty(user) {
  try {
    return JSON.stringify(JSON.parse(user), null, 2);
  } catch {
    return String(user);
  }
}

function renderRequest({ answerFile, workDir, schema, sections }) {
  const rel = path.relative(path.dirname(workDir), answerFile);
  const lines = [
    "# Vocabloot deck kit: an answer is needed",
    "",
    `Write your answer as one JSON object to \`${rel}\`. It must match the JSON schema at the end exactly: every required field present, no other fields, the given enum values only. No prose, no code fence, just the JSON.`,
    "",
  ];
  for (const [title, body] of sections) lines.push(`## ${title}`, "", body, "");
  if (schema) lines.push("## JSON schema", "", "```json", JSON.stringify(schema, null, 2), "```", "");
  return lines.join("\n");
}

/** The lines a script prints when requests are open, for the agent to act on. */
export function describeOpen(client, deckDir) {
  const out = [];
  if (client.rejected.length) {
    out.push(`${client.rejected.length} answer${client.rejected.length === 1 ? "" : "s"} did not match the schema:`);
    for (const r of client.rejected) {
      out.push(`  ${path.relative(deckDir, r.answer)}`);
      for (const p of r.problems.slice(0, 8)) out.push(`    ${p}`);
      if (r.problems.length > 8) out.push(`    and ${r.problems.length - 8} more`);
    }
  }
  if (client.missing.length) {
    out.push(
      `${client.missing.length} request${client.missing.length === 1 ? "" : "s"} to answer, then run the same command again:`,
    );
    for (const m of client.missing)
      out.push(`  ${path.relative(deckDir, m.request)}  ->  ${path.relative(deckDir, m.answer)}`);
  }
  return out;
}
