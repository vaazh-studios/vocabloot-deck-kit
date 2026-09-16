---
name: deck-check
description: Validate a Vocabloot deck folder before packing: schema, language and localization alignment, token offsets and coverage, sticker references and decisions, blocking flags; renders an app-like preview. Use before /deck-pack, when a creator asks whether a deck is ready, correct or complete, or says /deck-check.
license: MIT
compatibility: Requires Node 22 and the kit's scripts (npm install in the kit folder); network access to vocabloot.com for the language registry, with an offline snapshot fallback.
---

# /deck-check

Commands below run from the kit's root, the folder two levels above this file (`<kit>/skills/<this skill>/SKILL.md`); from anywhere else, prefix `scripts/` with that path. If a script answers that dependencies are not installed, run the `npm install` it prints.

```bash
node scripts/check.mjs <deck-folder>
```

It prints every problem with the card key in front, or "ready to pack". It also writes `review/preview.html`: the deck as the app and vocabloot.com/decks will show it, one card per tile, sentences with hover-to-see meanings. Open it with the creator and scroll through all of it together; this is the last look before the file exists.

If there are problems, route each one: a token or sentence problem goes back to `/deck-text --refresh "<word>"`; a sticker problem goes back to `/deck-stickers`; a `deck.json` problem (name, description, author) can be edited directly in `deck.json`. Never edit `cards.json` or the localization by hand.
