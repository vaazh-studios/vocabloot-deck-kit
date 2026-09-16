---
name: deck-text
description: Write every app-ready field of a Vocabloot deck: article, gender, plural, IPA, romanization, translation, two example sentences with translations, tappable tokens with lemma, part of speech, grammar codes and meanings, and a sticker picture idea per card; the script validates each card and writes cards.json, the localization file and a review report. Use after /deck-create, when a deck folder has words.json but no cards.json, or when the creator says /deck-text, generate the cards, or write the sentences.
license: MIT
compatibility: Requires Node 22 and the kit's scripts (npm install in the kit folder); network access to vocabloot.com for the language registry, with an offline snapshot fallback.
metadata:
  author: Vaazh Studios
  version: "0.1"
---

# /deck-text

Commands below run from the kit's root, the folder two levels above this file (`<kit>/skills/<this skill>/SKILL.md`); from anywhere else, prefix `scripts/` with that path. If a script answers that dependencies are not installed, run the `npm install` it prints.

Run on the deck folder the creator made with `/deck-create`:

```bash
node scripts/text.mjs <deck-folder>
```

Without an API key the script leaves one request per word in `work/text/<word>.request.md` and lists them. **You write the cards.** For each request: read it in full (the instructions are the card prompt filled in for this deck's languages and level; the input is the headword; the JSON schema is at the end), then write the card as one JSON object to the answer file it names. Every field to the letter: IPA between slashes, article, gender and plural for nouns where the language has them, two short natural sentences a learner at this level would say, and for every word of every sentence one token with its exact visible text, lemma, part of speech, grammar codes from the list, and one to three meanings in the creator's language. Choose the sticker mode with care: a formula like "good morning" is symbolic (a rising sun), not text-first. Then run the same command again: it validates every answer against the schema (a wrong field is named), turns the answers into `cards.json` (learning-language content), `localizations/<known>.json` (translations and token meanings), `cards-cache.json` (so reruns are free) and `review/report.md`. Answers you already gave are cached; only the ones it names are still open.

With `OPENAI_API_KEY` set, the script asks OpenAI instead and `--verify` adds a second grading pass per card; `--agent` keeps the writing on you even with a key.

Then open `review/report.md` and walk the creator through **"Needs a look"** first: every flagged card, with the flag in plain words (an uncovered word, a low-confidence field, a safety concern, a verify problem). For each flagged card the creator can:

- accept it as is (say so; the flag stays and the packer will refuse until it is resolved, so this is only for reading),
- regenerate it: `node scripts/text.mjs <deck-folder> --refresh "<word>"` (this drops the cached answer; delete `work/text/<word>.json` too, then write a better answer to the new request),
- replace the word in `words.json` and rerun.

Never edit `cards.json` or the localization by hand to fix a flag; the fix goes through the word list or a refresh. After the flags, show the creator two or three cards in full (headword, meaning, both sentences with their translations) so they see what a card is, and ask **"Does this read right?"** Then say the next step is `/deck-stickers`.

Rules: no key is needed and none is ever read but the creator's own; the deck's prompt is `prompts/card.md` (a `--prompt-file` override exists for people who maintain their own). Never write `cards.json` or the localization directly; your answers go through the script so every card is validated the same way.
