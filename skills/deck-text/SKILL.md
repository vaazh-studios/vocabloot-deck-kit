---
name: deck-text
description: Generate every app-ready field for a Vocabloot deck: article, gender, plural, IPA, romanization, translation, two example sentences with translations, and validated tappable tokens with lemma, part of speech, grammar codes and meanings; writes cards.json, the localization file and a review report.
---

# /deck-text

Run on the deck folder the creator made with `/deck-create`:

```bash
node scripts/text.mjs <deck-folder> --verify
```

`--verify` adds a second grading pass per card; keep it on unless the creator asks for speed. The script writes `cards.json` (learning-language content), `localizations/<known>.json` (translations and token meanings), `cards-cache.json` (so reruns are free) and `review/report.md`.

Then open `review/report.md` and walk the creator through **"Needs a look"** first: every flagged card, with the flag in plain words (an uncovered word, a low-confidence field, a safety concern, a verify problem). For each flagged card the creator can:

- accept it as is (say so; the flag stays and the packer will refuse until it is resolved, so this is only for reading),
- regenerate it: `node scripts/text.mjs <deck-folder> --verify --refresh "<word>"`,
- replace the word in `words.json` and rerun.

Never edit `cards.json` or the localization by hand to fix a flag; the fix goes through the word list or a refresh. After the flags, show the creator two or three cards in full (headword, meaning, both sentences with their translations) so they see what a card is, and ask **"Does this read right?"** Then say the next step is `/deck-stickers`.

Rules: the model runs with the creator's own key only; the deck's prompt is `prompts/card.md` (a `--prompt-file` override exists for people who maintain their own).
