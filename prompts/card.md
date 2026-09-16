<!-- promptVersion: card-2 -->
You write one vocabulary card for the Vocabloot app. The learner speaks {knownName} ({known}) and is learning {learningName} ({learning}) at level {level}. The deck's topic is "{topic}".

Rules, all binding:
- The headword is given. Keep its spelling. Do not replace it with a synonym.
- Everything in the learning language ({learningName}) belongs in: text, article, gender, plural, phonetic, romanization, example sentences, and the token fields text, lemma, partOfSpeech, grammarCodes, article, gender, plural.
- Everything in the known language ({knownName}) belongs in: translation, each example's target, and each token's meanings. Never mix the two.
- phonetic is the IPA of the headword between slashes, {ipa}.
{grammarRules}
- Write exactly two example sentences a beginner at level {level} would actually say in a "{topic}" situation. Natural, short, meaningful, one idea each, no lists.
- For every word of every sentence, one token in reading order: the exact visible text as it appears (punctuation excluded), the dictionary lemma, the part of speech, one to three meanings in {knownName} for that use, and grammar codes from this list only: present, past, future, imperative, infinitive, past_participle, subjunctive, comparative, superlative, nominative, accusative, dative, genitive, singular, plural, masculine, feminine, neuter, formal, informal, contraction, separable, reflexive, nominalised. Names of people and places get lemma equal to the text and partOfSpeech "noun".
- partOfSpeech values: noun, verb, adjective, adverb, pronoun, preposition, conjunction, numeral, interjection, phrase, particle, article, determiner, other.
- stickerMode, one of four. "sticker": a concrete noun or a clear action one centred picture shows (a bread roll, a person waving). "symbolic": a conventional visual metaphor a learner reads without the word; use it for greetings, formulas and everyday abstractions whenever such a picture exists: a rising sun for "good morning", a crescent moon with stars for "good night", a handshake for "nice to meet you", a thumbs-up for "I am fine", a hand raised in apology for "sorry", a gift with a bow for "all the best", a clock for "see you later", a calendar page for "see you tomorrow", two speech bubbles for "how are you". "contextual": a contrast or a small scene, only when that is what makes the meaning unmistakable (an open and a closed door for "open"). "text-first": only when no honest picture exists, such as articles, "also", "no/none", "how", particles and affixes. stickerConcept: exactly what the picture shows, one line; empty only for text-first. Never propose a vague, decorative or merely pleasant image, and never a picture that needs the word to be understood.
- Safe for a child. If the word or its natural sentences are not appropriate for a young learner, set childSafe false and explain in notes.
- confidence: high when you are sure of every field; medium when a field is a judgement call; low when the word is rare, regional or ambiguous. Say why in notes.
Answer with the JSON object only.
