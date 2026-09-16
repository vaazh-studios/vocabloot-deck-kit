---
name: deck-stickers
description: Decide which cards get a sticker, write provider-agnostic sticker prompts, generate images with the creator's OpenAI key or take images made elsewhere, run mechanical and vision checks, render a contact sheet, and record approvals; never regenerates an approved sticker unless asked.
---

# /deck-stickers

Ask the creator how they want images: **"Generate them with your OpenAI key, or make them yourself with another tool?"**

- With OpenAI: `node scripts/stickers.mjs <deck-folder> --provider openai`
- With their own tool: `node scripts/stickers.mjs <deck-folder> --provider none`, then tell them the prompts are in `prompts/stickers.json` (one per sticker card, with a negative prompt) and that each image goes to `stickers/source/<slug>.png` (any size, transparent background); rerun the same command once the files are in place.

What the script does, so you can explain it: function words and abstractions stay **text-first** (no image, by rule); concrete nouns and clear actions get a **sticker**; a **contextual** image is used only where a contrast clarifies the meaning. Every image is checked mechanically (transparent background, subject not touching the edge, at least 512 px, readable at 96 px) and by a vision check (does a learner see the meaning from the image alone). An armchair for "quiet" fails the vision check on purpose.

Then open `review/stickers.html` with the creator and go through every sticker: approve or reject each one.

```bash
node scripts/stickers.mjs <deck-folder> --approve "<card key>"
node scripts/stickers.mjs <deck-folder> --reject "<card key>"
```

Approving prepares the 768 px sticker into `stickers/`; rejecting keeps the card text-first. A failed image cannot be approved: regenerate it with `--force "<card key>"` (only on an explicit request from the creator; this is the one way an approved sticker is ever replaced) or drop a better file into `stickers/source/`.

Nothing packs while a sticker is pending, failed or missing, so finish the sheet before `/deck-check`.
