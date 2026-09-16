# Listing the kit in the plugin directories

Two directories, two routes. Both take the repo as it is: `.claude-plugin/` for Claude Code, `.codex-plugin/` for Codex, `skills/` for both.

## Codex and ChatGPT: the OpenAI plugin directory

**Published 2026-09-16**, version 0.1.0: <https://chatgpt.com/plugins/plugins_6aaafa1735208191ac6afb27325cc385> (the page needs a ChatGPT login; it shows the icon, the subtitle, the three prompts, the description and the six skills with their display names). Publication was immediate after "Confirm and submit". A new version is the same flow with a new ZIP from `npm run plugin-zip` and a bumped version in `.codex-plugin/plugin.json`.

The route is the submission portal, not a pull request. `github.com/openai/plugins` is OpenAI's own curated mirror; every addition there was made by OpenAI staff, and outside pull requests only update plugins already listed.

Portal: <https://platform.openai.com/plugins>, "Create plugin". Reference: <https://developers.openai.com/plugins/deploy/submission>.

Before submitting (founder, once):

- [ ] An OpenAI Platform organization, with your role holding "Apps Management" write access.
- [ ] Developer or business identity verified in the organization settings.
- [ ] Decide the countries the plugin is offered in (the portal asks; "all available" is the natural answer for a free tool).

What the portal does (walked through on 2026-09-16): "Create plugin" > "Skills only" > upload a ZIP of the plugin folder (the Codex-native layout with `.codex-plugin/plugin.json`, `skills/`, `scripts/`, `prompts/`, `registry/`, `packer/`, `package.json`, `package-lock.json`, `README.md`, `LICENSE`; no `node_modules`, no symlinked folders, 290 KB). The validator refuses a `metadata:` block in any `SKILL.md` ("Skill interface settings must use agents/openai.yaml"), so each skill carries `agents/openai.yaml` with `interface.display_name`, `short_description` and `default_prompt` instead. The manifest pre-fills the form (icons, name, description, category, URLs, version, package name, capabilities, starter prompts); the subtitle is capped at 30 characters; the developer name must match the verified identity (an individual identity shows the legal name, a business identity would show "Vaazh Studios"); each skill is scanned (all six passed, about two minutes); the last step is four attestations and "Confirm and submit", which the account holder ticks.

A helper builds the ZIP: `npm run plugin-zip` writes `dist/vocabloot-deck-kit.zip`.

What the portal asks for, ready to paste:

| field | value |
|---|---|
| Plugin name | Vocabloot Deck Kit |
| Developer name | must match the verified identity; today that is the individual legal name, so "Vaazh Studios" needs a verified business identity first |
| Subtitle (30 characters max) | Make Vocabloot language decks |
| Long description | Say which language you speak, which you are learning and what the deck is about. The assistant writes every card (pronunciation, grammar, two example sentences, tap-a-word meanings) and a picture idea per word; the kit validates each card, checks the images and packs a .vlbackup the Vocabloot app opens as its own. |
| Category | Education & Research |
| Logo | `.codex-plugin/assets/logo.png` (1024 x 1024, the app icon) |
| Brand colour | `#fb7359` |
| Website | <https://vocabloot.com> |
| Support | <https://github.com/vaazh-studios/vocabloot-deck-kit/issues> |
| Privacy policy | <https://privacy.vocabloot.com/> |
| Terms | <https://terms.vocabloot.com/> |
| Plugin type | Skills only (no MCP server, no authentication) |
| Skill bundle | the repository at the tag being submitted; the six skills are in `skills/` and the manifest in `.codex-plugin/plugin.json` |
| Permissions | reads and writes files in the deck folder the user names; runs Node scripts from the kit; one network call to `https://vocabloot.com/api/capabilities` (the language registry), and, only if the user configures their own OpenAI key, calls to the OpenAI API on their key |

Starter prompts (the `defaultPrompt` entries in the manifest):

1. Make me a German deck about the bakery.
2. I speak Spanish and I'm learning Japanese: 20 words for greetings.

### Positive test cases (five)

| # | prompt | expected behaviour |
|---|---|---|
| 1 | "Make me a German deck about the bakery." | `/deck-create` asks which language the user speaks, the number of words and the level (one question at a time), runs `scripts/create.mjs`, answers the word proposal request itself, shows the list and asks whether to keep it. |
| 2 | "I speak Spanish and I'm learning Japanese: 20 words for greetings." | Both languages are accepted (both are in the registry); the deck is created as es → ja; romanization is required on every card later because Japanese has `needsRomanization`. |
| 3 | After a confirmed word list: "Write the cards." | `/deck-text` runs `scripts/text.mjs`, answers every `work/text/*.request.md` with a JSON object matching the schema, reruns, and walks the user through `review/report.md`, flagged cards first. |
| 4 | "Now the pictures. I'll make them myself." | `/deck-stickers` runs with `--provider none`, points the user at `prompts/stickers.json` and `stickers/source/<slug>.png`, and after images exist looks at each one and answers the vision requests before showing the contact sheet. A greeting such as "Guten Morgen" carries a symbolic concept (a rising sun), not text-first. |
| 5 | "Check it and make the file." | `/deck-check` prints "ready to pack" or the problems with card keys; `/deck-pack` writes `<deck>.vlbackup` with its SHA-256; `/deck-publish` explains opening the file on iPhone or Android. |

### Negative test cases (three)

| # | prompt | expected refusal |
|---|---|---|
| 1 | "I speak English and I'm learning Tamil." | `scripts/create.mjs` refuses because Tamil is not in the app's registry; the assistant shows the script's message verbatim, lists the languages it offers, and does not promise the pair or work around the check. |
| 2 | "Just edit cards.json and fix that flagged sentence for me." | The assistant declines to edit `cards.json` or the localization by hand and routes the fix through `--refresh "<word>"` (a new request it answers) or the word list, as the skills require. |
| 3 | "Regenerate all the stickers, the approved ones too." | The assistant does not regenerate an approved sticker on its own; it explains that `--force "<card key>"` replaces one approved sticker only on the creator's explicit request per card, and asks which ones. |

## Claude Code: the official plugin directory

Also a form, not a pull request: <https://clau.de/plugin-directory-submission> (from the Contributing section of `github.com/anthropics/claude-plugins-official`). Approved external plugins land under `external_plugins/` there, and plugin names are immutable once listed, so `vocabloot-deck-kit` is the name for good. The repo already validates (`claude plugin validate .`) and installs from its own marketplace (`claude plugin marketplace add vaazh-studios/vocabloot-deck-kit`), which is enough for creators today; the directory form is for once a few creators have run the kit end to end. The listing copy above applies unchanged.
