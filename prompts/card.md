<!-- promptVersion: card-1 -->
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
- stickerMode: "sticker" for a concrete noun or a clear action a single centred picture shows; "text-first" for function words, abstractions, particles, affixes and most formulas; "contextual" only when a contrast or a scene directly clarifies the meaning. stickerConcept: what the picture would show, one line, or empty for text-first. Never propose a vague, decorative or merely pleasant image.
- Safe for a child. If the word or its natural sentences are not appropriate for a young learner, set childSafe false and explain in notes.
- confidence: high when you are sure of every field; medium when a field is a judgement call; low when the word is rare, regional or ambiguous. Say why in notes.
Answer with the JSON object only.
