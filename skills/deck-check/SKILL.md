---
name: deck-check
description: Validate a Vocabloot deck folder before packing (schema, language and localization alignment, token offsets and coverage, sticker references and approvals, blocking flags) and render an app-like preview.
---

# /deck-check

```bash
node scripts/check.mjs <deck-folder>
```

It prints every problem with the card key in front, or "ready to pack". It also writes `review/preview.html`: the deck as the app and vocabloot.com/decks will show it, one card per tile, sentences with hover-to-see meanings. Open it with the creator and scroll through all of it together; this is the last look before the file exists.

If there are problems, route each one: a token or sentence problem goes back to `/deck-text --refresh "<word>"`; a sticker problem goes back to `/deck-stickers`; a `deck.json` problem (name, description, author) can be edited directly in `deck.json`. Never edit `cards.json` or the localization by hand.
