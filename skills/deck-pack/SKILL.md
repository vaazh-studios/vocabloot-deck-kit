---
name: deck-pack
description: Pack an approved Vocabloot deck folder into a .vlbackup with the app's own codec; refuses while any check fails.
---

# /deck-pack

```bash
node scripts/pack.mjs <deck-folder>
```

The packer runs every check first and refuses with the reasons if any fail; there is no override. On success it prints the card and sticker counts, the file's SHA-256 and the path (`<deck-folder>/<deckId>.vlbackup`).

The packer is the Vocabloot app's own codec compiled to JavaScript (`packer/`, built from the app's `shared/format` module); the file it writes is the same format the app exports. Tell the creator the file is ready and hand over to `/deck-publish` for how to open it.
