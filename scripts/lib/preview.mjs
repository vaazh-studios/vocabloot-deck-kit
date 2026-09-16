// review/preview.html: the deck as the app and vocabloot.com/decks show it, so
// a creator sees every card before packing. Self-contained, no scripts.
const esc = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export function renderPreview({ deck, cards, localization }, { stickerBase = ".." } = {}) {
  const loc = new Map((localization ?? []).map((l) => [l.key, l]));
  const tiles = (cards ?? [])
    .map((c) => {
      const l = loc.get(c.key);
      const head = c.article ? `${c.article} ${c.text}` : c.text;
      const art = c.sticker?.file
        ? `<img src="${esc(stickerBase + "/" + c.sticker.file)}" alt="">`
        : `<span class="letter">${esc([...c.text][0] ?? "")}</span>`;
      const examples = (c.examples ?? [])
        .map((ex, i) => {
          // The sentence with its punctuation, each token wrapped by its offsets.
          let cursor = 0;
          let words = "";
          ex.tokens.forEach((t, k) => {
            words += esc(ex.source.slice(cursor, t.start));
            const m = l?.examples?.[i]?.tokens?.[k]?.meanings?.join(", ") ?? "";
            words += `<span class="tok" title="${esc(t.lemma ?? t.text)}: ${esc(m)}">${esc(ex.source.slice(t.start, t.end))}</span>`;
            cursor = t.end;
          });
          words += esc(ex.source.slice(cursor));
          return `<div class="ex"><p class="src">${words}</p><p class="tgt">${esc(l?.examples?.[i]?.target ?? "")}</p></div>`;
        })
        .join("");
      const flags = c.review?.flags?.length ? `<p class="flags">Flags: ${esc(c.review.flags.join(", "))}</p>` : "";
      return `<article class="card ${c.sticker?.mode}">
  <div class="hero">${art}</div>
  <h2>${esc(head)}</h2>
  <p class="gloss">${esc(l?.translation ?? "")}</p>
  <p class="facts">${[c.phonetic, c.partOfSpeech, c.gender, c.plural ? `plural ${c.plural}` : null, c.romanization].filter(Boolean).map(esc).join(" · ")}</p>
  <p class="mode">${esc(c.sticker?.mode ?? "")}${c.sticker?.concept ? `: ${esc(c.sticker.concept)}` : ""} · confidence ${esc(c.review?.confidence ?? "?")}</p>
  ${examples}${flags}
</article>`;
    })
    .join("\n");
  return `<!doctype html>
<html lang="${esc(deck.knownLanguage)}"><head><meta charset="utf-8"><title>${esc(deck.name)} preview</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body{margin:0;padding:24px;background:#f7eae6;color:#1a1512;font:16px/1.5 system-ui,sans-serif}
  h1{font-size:28px;margin:0 0 4px} .sub{color:#4e423b;margin:0 0 20px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
  .card{background:#fff9f5;border:3px solid #1a1512;border-radius:20px;box-shadow:5px 5px 0 #1a1512;padding:16px}
  .hero{display:grid;place-items:center;height:150px} .hero img{max-height:140px;max-width:140px}
  .letter{width:120px;height:120px;border-radius:50%;background:#ffe1d8;display:grid;place-items:center;font-size:56px;color:#ec5a3d}
  h2{margin:8px 0 0;font-size:24px;text-align:center} .gloss{text-align:center;margin:0;color:#4e423b;font-weight:600}
  .facts,.mode{text-align:center;color:#6b5b51;font-size:14px;margin:4px 0}
  .ex{background:#fff3cc;border:2px solid #1a1512;border-radius:12px;padding:10px 12px;margin-top:10px}
  .src{margin:0;font-weight:600} .tgt{margin:4px 0 0;color:#4e423b;font-style:italic}
  .tok{border-bottom:2px dotted #ec5a3d;cursor:help} .flags{color:#b00;font-weight:700}
  .text-first .hero{opacity:.9}
</style></head><body>
<h1>${esc(deck.name)}</h1>
<p class="sub">${esc(deck.knownLanguage)} → ${esc(deck.learningLanguage)} · ${esc(deck.level)} · ${(cards ?? []).length} cards · hover a word for its meaning</p>
<div class="grid">
${tiles}
</div>
</body></html>
`;
}
