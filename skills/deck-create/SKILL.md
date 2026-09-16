---
name: deck-create
description: Start a Vocabloot deck from a conversation. Asks which language the creator speaks and which they are learning, the topic, how many words, the level, and words to include or avoid; checks the pair against the Vocabloot app's live language registry; scaffolds the deck folder and proposes the word list.
---

# /deck-create

You are starting a Vocabloot deck for a creator. Ask, one at a time, and keep each question to one line:

1. **"Which language do you speak?"** (the known language: translations and explanations will be in it). Say "I speak" in your wording; never assume a native language.
2. **"Which language are you learning?"** (the learning language: headwords, pronunciation, example sentences).
3. **"What is the deck about?"** (the topic, a few words: "greetings", "at the bakery", "my apartment").
4. **"How many words?"** (suggest 20 for a first deck; 5 to 200).
5. **"Which level?"** (A1 to C2; suggest A1 for beginners).
6. **"Any words you want in, or want to avoid?"** (optional).

Then run, from the kit's root:

```bash
node scripts/create.mjs --known "<answer 1>" --learning "<answer 2>" --topic "<answer 3>" --count <answer 4> --level <answer 5> --include "<in>" --avoid "<avoid>" --author "<the creator's name, or Anonymous>" --out <where they want the deck folder>
```

The script checks the pair against the app's registry at `https://vocabloot.com/api/capabilities`. If it refuses a language, show its message verbatim and ask again with the languages it lists; never work around it and never promise a language or a pair the registry does not offer. If "English" is ambiguous, the script picks English (US); say so and offer English (UK).

The script scaffolds the folder and, unless a key is configured, leaves one request for you: `work/words/proposal.request.md`. **You propose the words**: read the request, write the list as JSON to the answer file it names (exactly the schema at the end of the request, nothing else), and run the same command again. It then prints the list.

Show the proposed word list exactly as printed and ask: **"Keep this list, or change anything?"** Apply changes by editing `words.json` (add, remove, rename entries; keep `include: true`), then show the list again. Do not move on until the creator says the list is right. Then say the next step is `/deck-text`.

Needs: Node 22. No API key: you are the model. (With `OPENAI_API_KEY` set the script asks OpenAI instead; `--agent` keeps it on you.)
