---
name: deck-publish
description: Explain how to open a packed Vocabloot deck (.vlbackup) in the app on iPhone or Android and what a card shows there; publishing to the Vocabloot community is a future capability. Use after /deck-pack, or when a creator asks how to install, import, share or publish a deck, or says /deck-publish.
license: MIT
compatibility: Requires Node 22 and the kit's scripts (npm install in the kit folder); network access to vocabloot.com for the language registry, with an offline snapshot fallback.
metadata:
  author: Vaazh Studios
  version: "0.1"
---

# /deck-publish

Tell the creator, in this order:

1. **Get the file onto the phone.** iPhone: AirDrop it, mail it to yourself, or save it to Files. Android: copy or download it.
2. **Open it with Vocabloot.** Tap the `.vlbackup` file and choose Vocabloot when asked. The words merge into the wordbook; nothing already there is touched, and opening the same file twice adds nothing.
3. **Look at a card.** The word detail shows the sticker, the headword, its meaning, the pronunciation, the part of speech, and the two sentences; tapping a word in a sentence shows its meaning.

Publishing the deck for everyone on vocabloot.com/community is not available yet; when it is, this skill will point at it. Until then, sharing the file directly is sharing the deck.
