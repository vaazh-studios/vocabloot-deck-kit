// One small client interface over the OpenAI SDK, and a fixture client for
// tests and dry runs. Every call is keyed so a response can be recorded and
// replayed; the kit never touches any secret store but the creator's key.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { AgentClient } from "./agent.mjs";

export const DEFAULT_MODEL = "gpt-4.1-mini";
export const IMAGE_MODEL = "gpt-image-1";

function fixtureName(key) {
  return createHash("sha256").update(key).digest("hex").slice(0, 24) + ".json";
}

/** Replays recorded responses from a folder; throws with the key when one is missing. */
export class FixtureClient {
  constructor(dir) {
    this.dir = dir;
  }
  read(key) {
    const file = path.join(this.dir, fixtureName(key));
    if (!existsSync(file))
      throw new Error(
        `No recorded response for "${key}" (expected ${path.relative(process.cwd(), file)}). Run with a real key and --record to create it.`,
      );
    return JSON.parse(readFileSync(file, "utf8")).response;
  }
  async chatJson({ key }) {
    return this.read(key);
  }
  async image({ key }) {
    return this.read(key);
  }
  async vision({ key }) {
    return this.read(key);
  }
}

/** The real client; with `record`, every response is also written as a fixture. */
export class OpenAIClient {
  constructor({ apiKey, record = null, sdk = null }) {
    this.apiKey = apiKey;
    this.record = record;
    this.sdk = sdk;
  }
  async client() {
    if (!this.sdk) {
      const { default: OpenAI } = await import("openai");
      this.sdk = new OpenAI({ apiKey: this.apiKey });
    }
    return this.sdk;
  }
  save(key, request, response) {
    if (!this.record) return;
    mkdirSync(this.record, { recursive: true });
    writeFileSync(path.join(this.record, fixtureName(key)), JSON.stringify({ key, request, response }, null, 2) + "\n");
  }
  /** A strict JSON-schema chat call; returns the parsed object. */
  async chatJson({ key, model = DEFAULT_MODEL, system, user, schema, schemaName, temperature = 0, seed = 7 }) {
    const sdk = await this.client();
    const request = {
      model,
      temperature,
      seed,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_schema", json_schema: { name: schemaName, strict: true, schema } },
    };
    const completion = await sdk.chat.completions.create(request);
    const text = completion.choices?.[0]?.message?.content ?? "";
    const response = JSON.parse(text);
    this.save(key, { model, system, user, schemaName }, response);
    return response;
  }
  /** One transparent square image; returns { pngBase64 }. */
  async image({ key, prompt, model = IMAGE_MODEL, size = "1024x1024", quality = "medium" }) {
    const sdk = await this.client();
    const result = await sdk.images.generate({
      model,
      prompt,
      size,
      quality,
      background: "transparent",
      output_format: "png",
      n: 1,
    });
    const response = { pngBase64: result.data?.[0]?.b64_json ?? "" };
    this.save(key, { model, prompt, size }, response);
    return response;
  }
  /** Asks the model whether an image depicts a concept; returns { depicts, reason }. */
  async vision({ key, model = DEFAULT_MODEL, prompt, pngBase64 }) {
    const sdk = await this.client();
    const schema = {
      type: "object",
      additionalProperties: false,
      required: ["depicts", "reason"],
      properties: { depicts: { type: "boolean" }, reason: { type: "string" } },
    };
    const completion = await sdk.chat.completions.create({
      model,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image_url", image_url: { url: `data:image/png;base64,${pngBase64}` } },
          ],
        },
      ],
      response_format: { type: "json_schema", json_schema: { name: "vision_check", strict: true, schema } },
    });
    const response = JSON.parse(completion.choices?.[0]?.message?.content ?? "{}");
    this.save(key, { model, prompt }, response);
    return response;
  }
}

/**
 * Picks the client: fixtures when OPENAI_FIXTURES points at a folder; the agent running the
 * skill when there is no key (or `agent` is set); else the real API with the creator's key.
 */
export function makeClient({
  apiKey,
  fixtures = process.env.OPENAI_FIXTURES,
  record = process.env.OPENAI_RECORD,
  agent = false,
  workDir = null,
} = {}) {
  if (fixtures) return new FixtureClient(fixtures);
  if (agent || !apiKey) return new AgentClient(workDir ?? path.join(process.cwd(), "work"));
  return new OpenAIClient({ apiKey, record });
}
