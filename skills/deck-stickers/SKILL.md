---
name: deck-stickers
description: Decide which cards get a sticker, write provider-agnostic sticker prompts, generate images with the creator's OpenAI key or take images made elsewhere, run mechanical and vision checks, render a contact sheet, and record approvals; never regenerates an approved sticker unless asked.
---

# /deck-stickers

Ask the creator how they want images: **"Generate them with your OpenAI key, or make them yourself with another tool?"**

- With OpenAI: `node scripts/stickers.mjs <deck-folder> --provider openai`
- With their own tool: `node scripts/stickers.mjs <deck-folder> --provider none`, then tell them the prompts are in `prompts/stickers.json` (one per sticker card, with a negative prompt) and that each image goes to `stickers/source/<slug>.png` (any size, transparent background); rerun the same command once the files are in place.

What the script does, so you can explain it. Every card has one of four modes, chosen by `/deck-text` and kept here:

- **sticker**: a concrete noun or a clear action one centred picture shows (a bread roll, a person waving).
- **symbolic**: a conventional visual metaphor a learner reads without the word. Greetings and formulas belong here, not in text-first: a rising sun for "Guten Morgen", a crescent moon with stars for "Gute Nacht", a handshake for "Freut mich", a thumbs-up for "Mir geht es gut", a hand raised in apology for "Entschuldigung", a clock for "Bis später", a calendar page for "Bis morgen". If the creator says a metaphor is wrong, change `sticker.concept` on that card in `cards.json` (the one field a creator may edit by hand) and rerun.
- **contextual**: a contrast or a small scene, only where that is what makes the meaning unmistakable.
- **text-first**: no image, only when no honest picture exists (articles, "auch", "kein", "wie"). Function words are text-first by rule whatever the model said.

Every image is checked mechanically (transparent background, subject not touching the edge, at least 512 px, readable at 96 px) and by a vision check that knows the mode (does a learner see the meaning from the image alone; is a symbolic metaphor conventional and read at a glance). An armchair for "quiet" fails the vision check on purpose.

Then open `review/stickers.html` with the creator and go through every sticker: approve, reject or defer each one.

```bash
node scripts/stickers.mjs <deck-folder> --approve "<card key>"
node scripts/stickers.mjs <deck-folder> --reject "<card key>"
node scripts/stickers.mjs <deck-folder> --defer "<card key>"
```

Approving prepares the 768 px sticker into `stickers/`. Rejecting makes the card text-first (the creator decided there is no honest picture). Deferring keeps the mode and the picture idea but ships the card text-only for now, so a deck can pack before every image exists; the prompt stays in `prompts/stickers.json` and the next run with an image in `stickers/source/` picks it up. A failed image cannot be approved: regenerate it with `--force "<card key>"` (only on an explicit request from the creator; this is the one way an approved sticker is ever replaced) or drop a better file into `stickers/source/`.

Nothing packs while a sticker is pending, failed or missing, so finish the sheet before `/deck-check`.
