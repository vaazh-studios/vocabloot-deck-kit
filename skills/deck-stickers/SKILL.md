---
name: deck-stickers
description: Decide which cards get a sticker (a picture idea per card: a rising sun for Guten Morgen), write provider-agnostic sticker prompts, take images made with any tool or generate them with the creator's own OpenAI key, run mechanical checks, look at every image yourself, render a contact sheet, and record approve, reject or defer decisions; never regenerates an approved sticker unless asked. Use after /deck-text, when a deck needs images, stickers or pictures, or when the creator says /deck-stickers.
license: MIT
compatibility: Requires Node 22 and the kit's scripts (npm install in the kit folder); network access to vocabloot.com for the language registry, with an offline snapshot fallback.
---

# /deck-stickers

**Show your work.** This is step 3 of 6. Say so before the first command. Every image goes into the chat the moment it exists: display the file (the PNG in `stickers/source/` or `stickers/`) next to its word and mode, one by one as they are generated or arrive, not as a list of paths at the end. When all are in, show the contact sheet (`review/stickers.html` rendered, or the images in a grid if the host cannot render HTML) and the check results per sticker. Never describe an image the creator has not seen, and never approve one for them.

Commands below run from the kit's root, the folder two levels above this file (`<kit>/skills/<this skill>/SKILL.md`); from anywhere else, prefix `scripts/` with that path. If a script answers that dependencies are not installed, run the `npm install` it prints.

Ask the creator how they want images: **"Make them with any image tool you like, or generate them with your own OpenAI key?"**

- With their own tool (the default, no key): `node scripts/stickers.mjs <deck-folder> --provider none`. Tell them the prompts are in `prompts/stickers.json` (one per sticker card, with a negative prompt) and that each image goes to `stickers/source/<slug>.png` (any size, transparent background). Rerun the same command once the files are in place.
- With OpenAI: `node scripts/stickers.mjs <deck-folder> --provider openai` (needs `OPENAI_API_KEY` in the environment or a `.env` file; the script says so if it is missing).

**You are the vision check.** Once images exist, the script leaves one request per image in `work/vision/<slug>.request.md`. Open the image it names and look at it (do not guess from the file name or the prompt), answer honestly whether a learner who does not know the word would get the meaning from the picture alone, write `{"depicts": true|false, "reason": "..."}` to the answer file, and rerun. A vague picture is `false`; say why. With a key the script asks OpenAI's vision model instead.

What the script does, so you can explain it. Every card has one of four modes, chosen by `/deck-text` and kept here:

- **sticker**: a concrete noun or a clear action one centred picture shows (a bread roll, a person waving).
- **symbolic**: a conventional visual metaphor a learner reads without the word. Greetings and formulas belong here, not in text-first: a rising sun for "Guten Morgen", a crescent moon with stars for "Gute Nacht", a handshake for "Freut mich", a thumbs-up for "Mir geht es gut", a hand raised in apology for "Entschuldigung", a clock for "Bis später", a calendar page for "Bis morgen". If the creator says a metaphor is wrong, change `sticker.concept` on that card in `cards.json` (the one field a creator may edit by hand) and rerun.
- **contextual**: a contrast or a small scene, only where that is what makes the meaning unmistakable.
- **text-first**: no image, only when no honest picture exists (articles, "auch", "kein", "wie"). Function words are text-first by rule whatever the model said.

Every image is checked mechanically (transparent background, subject not touching the edge, at least 512 px, readable at 96 px) and by the vision check above, which knows the mode (does a learner see the meaning from the image alone; is a symbolic metaphor conventional and read at a glance). An armchair for "quiet" fails the vision check on purpose.

Then open `review/stickers.html` with the creator and go through every sticker: approve, reject or defer each one.

```bash
node scripts/stickers.mjs <deck-folder> --approve "<card key>"
node scripts/stickers.mjs <deck-folder> --reject "<card key>"
node scripts/stickers.mjs <deck-folder> --defer "<card key>"
```

Approving prepares the 768 px sticker into `stickers/`. Rejecting makes the card text-first (the creator decided there is no honest picture). Deferring keeps the mode and the picture idea but ships the card text-only for now, so a deck can pack before every image exists; the prompt stays in `prompts/stickers.json` and the next run with an image in `stickers/source/` picks it up. A failed image cannot be approved: regenerate it with `--force "<card key>"` (only on an explicit request from the creator; this is the one way an approved sticker is ever replaced) or drop a better file into `stickers/source/`.

Nothing packs while a sticker is pending, failed or missing, so finish the sheet before `/deck-check`.
