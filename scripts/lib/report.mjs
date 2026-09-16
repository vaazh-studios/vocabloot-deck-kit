// review/report.md: every generated field per card, so a person can read the deck before packing.
export function renderReport({ deck, cards, localization, verification = {} }) {
  const loc = new Map((localization ?? []).map((l) => [l.key, l]));
  const lines = [
    `# ${deck.name}: review report`,
    "",
    `Deck \`${deck.id}\`, ${deck.knownLanguage} → ${deck.learningLanguage}, ${deck.level}, ${cards.length} cards. Generated ${deck.updatedAt} with prompt ${deck.promptVersion}.`,
    "",
  ];
  const flagged = cards.filter((c) => c.review.flags.length || !c.review.safe || c.review.confidence !== "high");
  lines.push(`## Needs a look (${flagged.length})`, "");
  if (!flagged.length) lines.push("Nothing flagged.", "");
  for (const c of flagged) {
    lines.push(
      `- **${c.key}**: confidence ${c.review.confidence}${c.review.safe ? "" : ", marked unsafe"}${c.review.flags.length ? `, flags: ${c.review.flags.join(", ")}` : ""}${c.review.notes ? ` (${c.review.notes})` : ""}`,
    );
  }
  lines.push("", "## Cards", "");
  for (const c of cards) {
    const l = loc.get(c.key);
    const head = c.article ? `${c.article} ${c.text}` : c.text;
    lines.push(`### ${head} · ${l?.translation ?? ""}`, "");
    lines.push(
      `- ${[c.phonetic, c.partOfSpeech, c.gender, c.plural ? `plural ${c.plural}` : null, c.romanization].filter(Boolean).join(" · ")}`,
    );
    lines.push(`- sticker: ${c.sticker.mode}${c.sticker.concept ? ` (${c.sticker.concept})` : ""}`);
    c.examples.forEach((ex, i) => {
      lines.push(`- ${ex.source}`);
      lines.push(`  ${l?.examples?.[i]?.target ?? ""}`);
      lines.push(
        `  tokens: ${ex.tokens.map((t, k) => `${t.text}→${t.lemma}${l?.examples?.[i]?.tokens?.[k]?.meanings ? ` (${l.examples[i].tokens[k].meanings.join(", ")})` : ""}`).join(" · ")}`,
      );
    });
    const v = verification[c.key];
    if (v) lines.push(`- verify: ${v.natural && v.levelOk && v.correct && v.safe ? "ok" : `problem: ${v.issue}`}`);
    lines.push("");
  }
  return lines.join("\n") + "\n";
}
