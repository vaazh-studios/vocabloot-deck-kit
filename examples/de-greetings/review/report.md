# German Greetings: review report

Deck `de-greetings`, en-US → de, A1, 20 cards. Hand-authored on 2026-09-16 to the kit's schema (prompt version `hand-authored-1`); this is the canonical example and the recorded fixture the tests compare a real generation against.

## Cards

| key | translation | sticker | confidence | flags |
|---|---|---|---|---|
| Hallo | hello | sticker: a person smiling and waving hello (German A1 pool) | high | |
| Guten Morgen | good morning | text-first | high | |
| Guten Tag | hello (formal); good day | text-first | high | |
| Guten Abend | good evening | text-first | high | |
| Gute Nacht | good night | text-first | high | |
| Tschüss | bye | sticker: a person walking away and waving goodbye (German A1 pool) | high | |
| Auf Wiedersehen | goodbye (formal) | text-first | high | |
| Bis später | see you later | text-first | high | |
| Bis morgen | see you tomorrow | text-first | high | |
| Wie geht's? | how are you? (informal) | text-first | high | |
| Wie geht es Ihnen? | how are you? (formal) | text-first | high | |
| Mir geht es gut | I am fine | text-first | high | |
| danke | thank you | sticker: a person handing flowers to say thank you (German A1 pool) | high | |
| bitte | please; you are welcome | sticker: a person holding out an open hand (German A1 pool) | high | |
| Entschuldigung (die, feminine, plural Entschuldigungen) | excuse me; sorry | text-first | high | |
| willkommen | welcome | sticker: a person opening a door to welcome someone in (German A1 pool) | high | |
| Ich heiße | my name is | sticker: a person pointing at themselves (German A1 pool) | high | |
| Freut mich | nice to meet you | text-first | high | |
| Alles Gute | all the best | text-first | high | |
| Schönen Tag noch | have a nice day | text-first | high | |

## Sticker decisions

Greeting formulas are speech acts: an image helps only where a gesture carries the meaning (waving, an open hand, an open door, pointing at oneself, handing something over). The pool's "gut" (a woman with an apple), "morgen" (packing a bag) and "später" (a clock on a desk) were considered and rejected as attractive but vague; those cards stay text-first until `/deck-stickers` generates an accurate image, which the contact sheet then decides.

## Checks

- Every sentence's tokens reproduce it and cover every word; one to three meanings per token.
- IPA on all 20; gender and plural on the one noun; romanization not required for German.
- No safety or blocking flags. Packed with the kit's packer and imported through the app's importer in the app repo's `KitDeckImportTest` (20 imported, 0 skipped, second import adds nothing).
