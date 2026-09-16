# Vocabloot Deck Kit

Make a [Vocabloot](https://vocabloot.com) deck from a conversation: say which language you speak, which you are learning, and what the deck is about, and get a `.vlbackup` the app opens as its own, with everything a word's detail page shows: pronunciation, grammar, two example sentences with translations, and tap-a-word meanings.

Six skills for Claude Code or Codex drive small Node scripts. The model you are already talking to writes the cards; the scripts validate every field, assemble the folder, check the images and pack the file with the app's own codec. No API key. Stickers come from any image tool you like, or from OpenAI's image model with your own key if you have one.

## The five-minute path

Needs Node 22 and [Claude Code](https://claude.com/claude-code) or [Codex](https://developers.openai.com/codex).

```bash
git clone https://github.com/vaazh-studios/vocabloot-deck-kit
cd vocabloot-deck-kit && npm install
```

Then open the folder in Claude Code or Codex: both find the skills there (`.claude-plugin/` and `.agents/skills/`). To use them from any folder, `npm run install-skills` copies them into `~/.claude/skills` and `~/.agents/skills` with this kit's path written in. Claude Code can also load the kit as a plugin: `claude --plugin-dir /path/to/vocabloot-deck-kit`, or `claude plugin marketplace add vaazh-studios/vocabloot-deck-kit` once and then `claude plugin install vocabloot-deck-kit@vocabloot-deck-kit`.

Then:

| skill | what happens |
|---|---|
| `/deck-create` | it asks: I speak, I'm learning, the topic, how many words, the level, words to include or avoid; checks the pair against the app's registry; the assistant proposes the word list |
| `/deck-text` | the assistant writes every app-ready field, two sentences and tokens per card; the script validates each card against the schema and writes the folder and a review report |
| `/deck-stickers` | a picture idea per card (a rising sun for "Guten Morgen"), prompts for any image model, images from your own tool or through your key, mechanical checks, the assistant looks at every image, a contact sheet you approve |
| `/deck-check` | every gate, and a preview of the deck as the app shows it |
| `/deck-pack` | the `.vlbackup` |
| `/deck-publish` | how to open it in the app |

How the keyless part works: each script leaves its questions as request files in the deck's `work/` folder (the instructions, the input and the exact JSON schema), the assistant answers them, the script validates the answers and continues. Answers are cached, so reruns are free.

Or without an assistant, the scripts directly with your own OpenAI key in `OPENAI_API_KEY` or a `.env` file: `node scripts/create.mjs --known English --learning German --topic "at the bakery" --count 20 --level A1`, then `text.mjs --verify`, `stickers.mjs --provider openai`, `check.mjs`, `pack.mjs` on the folder it made. The key is only ever read from your environment or that file.

## Languages

Only the languages the Vocabloot app offers, read live from `https://vocabloot.com/api/capabilities` when you run `/deck-create` (a dated snapshot in `registry/` is the offline fallback). The language you speak and the language you learn must differ. The kit does not claim any language the app does not have.

## The deck folder

```
de-bakery/
  deck.json                learningLanguage, knownLanguage, direction (derived), topic, level, author, licence
  words.json               the confirmed word list
  cards.json               learning-language content: headword, article, gender, plural, IPA, romanization, sticker mode, two sentences with tokens
  localizations/en-US.json translations and token meanings, aligned by card and token
  prompts/stickers.json    sticker prompts for any image model
  work/                    the scripts' requests and the assistant's answers (safe to delete once cards.json exists)
  stickers/<slug>.png      prepared 768 px stickers; stickers/source/ holds the originals
  review/                  report.md, stickers.html, review.json (approvals), preview.html
  de-bakery.vlbackup       the result
```

Reusable content and localization are separate on purpose: a German headword, its IPA, sticker and German sentences serve English → German and Spanish → German alike; only the localization file differs.

## The gates

The packer refuses, with the card named, when a sentence's tokens do not reproduce it or leave a word uncovered, when a referenced sticker is missing, when an image failed a check, or when a card carries an unresolved flag. Fixes go through the word list, `--refresh`, or the sticker review, never through editing generated JSON.

## The example

`examples/de-greetings`: English (US) → German, Greetings, 20 cards. It imports into the app as is (the app's own test suite imports it). Six stickers come from the Vocabloot German A1 pool (CC BY-NC-SA 4.0, © 2026 Vaazh Studios); the fourteen greeting formulas carry a symbolic picture idea each (see `prompts/stickers.json`) and are deferred until those images are generated, so they ship text-only for now, see `review/report.md`.

## What is public and what is not

Public here: the schema, the folder, the registry identifiers, the content and sticker quality rules, the prompts in `prompts/`, validation, the packer, the skills, the example deck. Not here: Vocabloot's production prompts and per-language rules, the backend's logic, internal content, the official decks' card registry. Official decks use this same pipeline with a private `--prompt-file`.

Code is MIT; the prompts and guides in `prompts/` are CC BY 4.0.
