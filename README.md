# Vocabloot Deck Kit

Make a [Vocabloot](https://vocabloot.com) deck from a conversation. Say which language you speak, which you are learning and what the deck is about; get a `.vlbackup` the app opens as its own, with everything a word's detail page shows: pronunciation, grammar, two example sentences with translations, tap-a-word meanings and a sticker.

Six skills for Claude Code or Codex, six small Node scripts, no API key.

- [How it works](#how-it-works)
- [Install](#install)
- [Try it](#try-it)
- [The workflow](#the-workflow)
- [Without an assistant](#without-an-assistant)
- [Languages](#languages)
- [The deck folder](#the-deck-folder)
- [The gates](#the-gates)
- [The example deck](#the-example-deck)
- [What is public and what is not](#what-is-public-and-what-is-not)
- [Contributing](#contributing)
- [License](#license)

## How it works

You tell your assistant what deck you want. It asks the few things it needs (I speak, I'm learning, the topic, how many words, the level), checks the language pair against the app's live registry, and proposes a word list you can change.

Then the assistant writes the cards itself. For each word it gets a request file with the card rules for that language and level, the headword and the exact JSON schema, and answers it: article, gender and plural where the language has them, IPA, the translation, two short sentences a learner at that level would say, and for every word in those sentences a token with its lemma, part of speech, grammar codes and meaning. The scripts validate every answer field by field, turn the answers into the deck folder and write a review report you go through together.

Every card also gets a picture idea. A bread roll is a bread roll; "Guten Morgen" is a rising sun; "Freut mich" is a handshake; only words with no honest picture stay text-only. You make the images with any tool you like from the prompts the kit writes (or with your own OpenAI key), the kit checks them mechanically, the assistant looks at each one and says whether a learner would get the meaning, and you approve, reject or defer on a contact sheet.

The packer is the Vocabloot app's own codec compiled to JavaScript. It refuses, with the card named, while anything is unresolved. The file it writes is the file the app exports, so the app opens it as its own.

## Install

Needs [Node 22](https://nodejs.org) and one of the assistants below.

```bash
git clone https://github.com/vaazh-studios/vocabloot-deck-kit
cd vocabloot-deck-kit && npm install
```

**Claude Code.** Open the kit folder in Claude Code and the six skills are there. From another folder, load it as a plugin for the session:

```bash
claude --plugin-dir /path/to/vocabloot-deck-kit
```

Or register it once and install it like any other plugin:

```bash
claude plugin marketplace add vaazh-studios/vocabloot-deck-kit
claude plugin install vocabloot-deck-kit@vocabloot-deck-kit
```

**Codex.** Open the kit folder in Codex and the skills are found in `.agents/skills/` (Codex reads that folder at repo scope). The repo carries a Codex plugin manifest (`.codex-plugin/plugin.json`) for the Codex plugin marketplace.

**Any folder, either assistant.** Copy the skills into your user skill folders with the kit's path written into every command:

```bash
npm run install-skills
```

That writes to `~/.claude/skills` (Claude Code) and `~/.agents/skills` (Codex); pass `--claude` or `--codex` for one of them. Restart the assistant afterwards.

## Try it

Say any of these to your assistant:

- "Make me a German deck about the bakery."
- "I speak Spanish and I'm learning Japanese: 20 words for greetings."
- "/deck-create"

It will ask the rest.

## The workflow

Each step is one skill; each skill runs one script, answers what the script asks, and shows you the result before moving on.

1. **`/deck-create`** asks I speak, I'm learning, the topic, how many words, the level, words to include or avoid; checks the pair against the app's registry; the assistant proposes the word list and you edit it until it is right. Leaves `deck.json` and `words.json`.
2. **`/deck-text`** the assistant writes every card to the card prompt and the JSON schema; the script validates each one (a wrong field is named), writes `cards.json`, `localizations/<your language>.json` and `review/report.md`, and the assistant walks you through anything flagged. Fixes go through the word list or `--refresh`, never through editing the generated files.
3. **`/deck-stickers`** a picture idea per card and a prompt for any image model in `prompts/stickers.json`; you make the images (or the kit does, with your key); mechanical checks, the assistant's look at every image, a contact sheet; you approve, reject or defer each sticker. A deferred card ships text-only and keeps its picture idea for later.
4. **`/deck-check`** every gate, and `review/preview.html`: the deck as the app shows it.
5. **`/deck-pack`** the `.vlbackup`, with its SHA-256.
6. **`/deck-publish`** how to open it on iPhone or Android. Publishing to the Vocabloot community is coming; until then sharing the file is sharing the deck.

Answers are cached in the deck folder, so rerunning a step is free and reproducible.

## Without an assistant

The scripts run on their own with your OpenAI key in `OPENAI_API_KEY` or a `.env` file next to the deck (the key is read from nowhere else):

```bash
node scripts/create.mjs --known English --learning German --topic "at the bakery" --count 20 --level A1
node scripts/text.mjs de-at-the-bakery --verify
node scripts/stickers.mjs de-at-the-bakery --provider openai
node scripts/check.mjs de-at-the-bakery
node scripts/pack.mjs de-at-the-bakery
```

`--verify` adds a second grading pass per card. With a key and an assistant, `--agent` keeps the writing on the assistant.

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
  stickers/<slug>.png      prepared 768 px stickers; stickers/source/ holds the originals
  review/                  report.md, stickers.html, review.json (decisions), preview.html
  work/                    the scripts' requests and the assistant's answers (safe to delete once cards.json exists)
  de-bakery.vlbackup       the result
```

Reusable content and localization are separate on purpose: a German headword, its IPA, sticker and German sentences serve English → German and Spanish → German alike; only the localization file differs.

## The gates

The packer refuses, with the card named, when a sentence's tokens do not reproduce it or leave a word uncovered, when a referenced sticker is missing, when an image failed a check, when a sticker card has no decision, or when a card carries an unresolved flag. Fixes go through the word list, `--refresh`, or the sticker review, never through editing generated JSON.

## The example deck

`examples/de-greetings`: English (US) → German, Greetings, 20 cards. It imports into the app as is (the app's own test suite imports it). Six stickers come from the Vocabloot German A1 pool (CC BY-NC-SA 4.0, © 2026 Vaazh Studios); the fourteen greeting formulas carry a symbolic picture idea each (see `prompts/stickers.json`) and are deferred until those images exist, so they ship text-only for now. `review/report.md` is what `/deck-text` writes.

## What is public and what is not

Public here: the schema, the folder, the registry identifiers, the content and sticker quality rules, the prompts in `prompts/`, validation, the packer, the skills, the example deck. Not here: Vocabloot's production prompts and per-language rules, the backend's logic, internal content, the official decks' card registry. Official decks use this same pipeline with a private `--prompt-file`.

## Contributing

Issues and pull requests at [github.com/vaazh-studios/vocabloot-deck-kit](https://github.com/vaazh-studios/vocabloot-deck-kit/issues). `npm run check` runs formatting, lint and the tests; a change to a prompt bumps its `promptVersion` line; a change to the packer is made in the Vocabloot app repo and published here. Skills follow the [Agent Skills](https://agentskills.io/specification) format: `name` equals the folder, `description` says what and when, the body stays short.

## License

Code is MIT. The prompts and guides in `prompts/` are CC BY 4.0. The example deck's stickers are CC BY-NC-SA 4.0, © 2026 Vaazh Studios.
