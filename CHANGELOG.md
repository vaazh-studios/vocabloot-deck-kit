# Changelog

## 0.1.1 (2026-09-17)

- Lazy tokens are refused by `/deck-text`, `/deck-check` and the packer: a sentence with more than half its tokens tagged "other", or two or more meanings that just repeat the word (a name may keep its name, one cognate is fine). Found in three decks an assistant built by scripting the answers instead of writing them.
- Every skill shows its work: a milestone line before and after each step ("Step 3 of 6"), cards written in batches of five with their headwords, every sticker displayed in the chat the moment it exists, the contact sheet and the preview shown, the packed file offered, one deck at a time. Found by the founder running the plugin in ChatGPT, where it worked for minutes and showed nothing.

## 0.1.0 (2026-09-16)

First public version.

- Six skills for Claude Code and Codex: `/deck-create`, `/deck-text`, `/deck-stickers`, `/deck-check`, `/deck-pack`, `/deck-publish`.
- Agent-native: the assistant writes the words, the cards and the vision verdicts through request and answer files the scripts validate; no API key. An OpenAI key is optional, for image generation or unattended runs.
- Languages only from the Vocabloot app's live registry, with a dated offline snapshot.
- Sticker modes `sticker`, `symbolic`, `contextual`, `text-first`; a picture idea per card; mechanical checks; approve, reject or defer.
- The packer is the app's own codec compiled to JavaScript; it refuses with the card named while any check fails.
- Example deck `examples/de-greetings` (English → German, 20 cards), imported by the app's own test suite.
- Published in the ChatGPT plugin directory; submitted to Anthropic's community marketplace.
