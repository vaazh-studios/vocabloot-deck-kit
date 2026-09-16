// The subset of JSON Schema the kit's answer schemas use: type (one or several),
// enum, required, properties with additionalProperties false, items, min/maxItems.
// Enough to tell an agent exactly which field of its answer is wrong.

function typeOf(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (typeof v === "number") return Number.isInteger(v) ? "integer" : "number";
  return typeof v;
}

function typeOk(v, type) {
  const types = Array.isArray(type) ? type : [type];
  const actual = typeOf(v);
  return types.some((t) => t === actual || (t === "number" && actual === "integer"));
}

/** Returns a list of problems; empty when the value matches the schema. */
export function validateAgainst(schema, value, where = "answer") {
  const p = [];
  if (!schema || typeof schema !== "object") return p;
  if (schema.type && !typeOk(value, schema.type)) {
    p.push(`${where}: expected ${[].concat(schema.type).join(" or ")}, got ${typeOf(value)}`);
    return p;
  }
  if (schema.enum && !schema.enum.includes(value))
    p.push(`${where}: must be one of ${schema.enum.map((e) => JSON.stringify(e)).join(", ")}`);
  if (typeOf(value) === "object" && schema.properties) {
    for (const k of schema.required ?? []) if (!(k in value)) p.push(`${where}.${k}: missing`);
    for (const [k, v] of Object.entries(value)) {
      if (schema.properties[k]) p.push(...validateAgainst(schema.properties[k], v, `${where}.${k}`));
      else if (schema.additionalProperties === false) p.push(`${where}.${k}: not a field of this schema`);
    }
  }
  if (typeOf(value) === "array") {
    if (schema.minItems != null && value.length < schema.minItems)
      p.push(`${where}: at least ${schema.minItems} items required, got ${value.length}`);
    if (schema.maxItems != null && value.length > schema.maxItems)
      p.push(`${where}: at most ${schema.maxItems} items allowed, got ${value.length}`);
    if (schema.items) value.forEach((v, i) => p.push(...validateAgainst(schema.items, v, `${where}[${i}]`)));
  }
  return p;
}
