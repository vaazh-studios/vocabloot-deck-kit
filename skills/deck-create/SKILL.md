---
name: deck-create
description: Start a Vocabloot deck from a conversation: asks which language the creator speaks and which they are learning, the topic, how many words, the level, words to include or avoid; checks the pair against the Vocabloot app's live language registry; scaffolds the deck folder and has you propose the word list. Use when someone wants to make, start or build a Vocabloot deck, a vocabulary deck, a word list or flashcards for a language, or says /deck-create.
license: MIT
compatibility: Requires Node 22 and the kit's scripts (npm install in the kit folder); network access to vocabloot.com for the language registry, with an offline snapshot fallback.
---

# /deck-create

**Show your work.** This is step 1 of 6. Say so before the first command ("Step 1 of 6: creating the deck folder and proposing the words") and end the step with the list itself, not a summary of it. One deck per run: if the creator asks for several decks, make them one after another, and show each one finished before starting the next. Never work in silence for more than one command; say what is happening between commands.

Commands below run from the kit's root, the folder two levels above this file (`<kit>/skills/<this skill>/SKILL.md`); from anywhere else, prefix `scripts/` with that path. If a script answers that dependencies are not installed, run the `npm install` it prints.

You are starting a Vocabloot deck for a creator. Ask, one at a time, and keep each question to one line:

1. **"Which language do you speak?"** (the known language: translations and explanations will be in it). Say "I speak" in your wording; never assume a native language.
2. **"Which language are you learning?"** (the learning language: headwords, pronunciation, example sentences).
3. **"What is the deck about?"** (the topic, a few words: "greetings", "at the bakery", "my apartment").
4. **"How many words?"** (suggest 20 for a first deck; 5 to 200).
5. **"Which level?"** (A1 to C2; suggest A1 for beginners).
6. **"Any words you want in, or want to avoid?"** (optional).

Then run:

```bash
node scripts/create.mjs --known "<answer 1>" --learning "<answer 2>" --topic "<answer 3>" --count <answer 4> --level <answer 5> --include "<in>" --avoid "<avoid>" --author "<the creator's name, or Anonymous>" --out <where they want the deck folder>
```

The script checks the pair against the app's registry at `https://vocabloot.com/api/capabilities`. If it refuses a language, show its message verbatim and ask again with the languages it lists; never work around it and never promise a language or a pair the registry does not offer. If "English" is ambiguous, the script picks English (US); say so and offer English (UK).

The script scaffolds the folder and, unless a key is configured, leaves one request for you: `work/words/proposal.request.md`. **You propose the words**: read the request, write the list as JSON to the answer file it names (exactly the schema at the end of the request, nothing else), and run the same command again. It then prints the list.

Show the proposed word list exactly as printed and ask: **"Keep this list, or change anything?"** Apply changes by editing `words.json` (add, remove, rename entries; keep `include: true`), then show the list again. Do not move on until the creator says the list is right. Then say the next step is `/deck-text`.

Needs: Node 22. No API key: you are the model. (With `OPENAI_API_KEY` set the script asks OpenAI instead; `--agent` keeps it on you.)
