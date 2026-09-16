// Mechanical sticker checks and preparation, with sharp (deck kit spec section 7).
import sharp from "sharp";

export const CHECKS = { minSize: 512, maxBorderOpaque: 0.05, minSubjectAt96: 0.08, prepared: 768, colours: 255 };

/** { ok, problems, width, height } for one PNG buffer. */
export async function checkSticker(buffer, rules = CHECKS) {
  const problems = [];
  const image = sharp(buffer);
  const meta = await image.metadata();
  if (!meta.hasAlpha) problems.push("no alpha channel (the background is not transparent)");
  if ((meta.width ?? 0) < rules.minSize || (meta.height ?? 0) < rules.minSize)
    problems.push(`smaller than ${rules.minSize} px (${meta.width}×${meta.height})`);
  if (meta.hasAlpha) {
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const w = info.width;
    const h = info.height;
    let borderOpaque = 0;
    let borderTotal = 0;
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const onBorder = x < 2 || y < 2 || x >= w - 2 || y >= h - 2;
        if (!onBorder) continue;
        borderTotal += 1;
        if (data[(y * w + x) * 4 + 3] > 16) borderOpaque += 1;
      }
    }
    if (borderTotal && borderOpaque / borderTotal > rules.maxBorderOpaque)
      problems.push(
        `subject touches the edge (${Math.round((100 * borderOpaque) / borderTotal)} % of the border is opaque)`,
      );
    const small = await sharp(buffer)
      .resize(96, 96, { fit: "inside" })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    let opaque = 0;
    for (let i = 3; i < small.data.length; i += 4) if (small.data[i] > 128) opaque += 1;
    const ratio = opaque / (small.info.width * small.info.height);
    if (ratio < rules.minSubjectAt96)
      problems.push(`subject too small to read at 96 px (${Math.round(ratio * 100)} % opaque)`);
  }
  return { ok: problems.length === 0, problems, width: meta.width, height: meta.height };
}

/** 768 px on the long side, palette PNG with alpha, like the German A1 stickers. */
export async function prepareSticker(buffer, rules = CHECKS) {
  return sharp(buffer)
    .resize(rules.prepared, rules.prepared, { fit: "inside", withoutEnlargement: false })
    .png({ palette: true, colours: rules.colours, compressionLevel: 9 })
    .toBuffer();
}

/** A contact sheet for the review: every candidate at 160 and 64 px on light and dark, with its checks and the decision. */
export function renderSheet({ deck, items }) {
  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  const cards = items
    .map((it) => {
      const img = it.file
        ? `<img src="../${esc(it.file)}" alt=""><img class="small" src="../${esc(it.file)}" alt=""><img class="small dark" src="../${esc(it.file)}" alt="">`
        : `<p class="none">no image yet</p>`;
      const checks = it.problems?.length
        ? `<p class="bad">${it.problems.map(esc).join("<br>")}</p>`
        : it.file
          ? `<p class="ok">mechanical checks passed</p>`
          : "";
      const vision = it.vision
        ? `<p class="${it.vision.depicts ? "ok" : "bad"}">vision: ${it.vision.depicts ? "depicts it" : "does not depict it"}. ${esc(it.vision.reason)}</p>`
        : "";
      return `<div class="s ${esc(it.status)}">${img}<p><b>${esc(it.text)}</b> · ${esc(it.translation)}<br><span class="c">${esc(it.mode)}: ${esc(it.concept)}</span></p>${checks}${vision}<p class="st">status: ${esc(it.status)}</p><p class="cmd"><code>--approve "${esc(it.key)}"</code> · <code>--reject "${esc(it.key)}"</code> · <code>--defer "${esc(it.key)}"</code></p></div>`;
    })
    .join("\n");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(deck.name)}: sticker review</title>
<style>body{font:16px system-ui;background:#f7eae6;padding:24px;color:#1a1512}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}.s{background:#fff9f5;border:3px solid #1a1512;border-radius:16px;padding:12px;text-align:center}.s img{width:160px;height:160px;object-fit:contain;background:repeating-conic-gradient(#eee 0 25%,#fff 0 50%) 0 0/24px 24px}.small{width:64px!important;height:64px!important}.dark{background:#1a1512!important}.ok{color:#1d7264;font-weight:700}.bad{color:#b00;font-weight:700}.c{color:#4e423b}.st{font-weight:800}.approved{border-color:#2e9e8c}.rejected{opacity:.5}.deferred{border-style:dashed}.cmd code{font-size:12px}.none{color:#6b5b51}</style></head>
<body><h1>Sticker review: ${esc(deck.name)}</h1><p>Decide each sticker with <code>node scripts/stickers.mjs &lt;deck&gt; --approve "&lt;key&gt;"</code>, <code>--reject</code> (the card becomes text-first) or <code>--defer</code> (the card ships text-only for now and keeps its picture idea). Nothing packs until every sticker card has a decision.</p>
<div class="grid">
${cards}
</div></body></html>
`;
}
