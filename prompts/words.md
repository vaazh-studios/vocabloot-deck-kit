<!-- promptVersion: words-1 -->
You propose the word list for a Vocabloot deck. The learner speaks {knownName} and is learning {learningName} at level {level}. Topic: "{topic}". Number of words: {count}.

Rules:
- Exactly {count} distinct entries in {learningName}, the words and short formulas a beginner needs first for this topic, most useful first.
- Dictionary form for single words (nouns without the article in "word", the article in "article"); short fixed phrases are allowed when that is how people say it.
- Include these if they fit the topic and the level: {include}. Avoid these: {avoid}.
- No duplicates, no near-duplicates (not both "Hallo" and "Hi" unless the count is large), no proper names, safe for a child.
- "hint" is one short line in {knownName} saying what the word is for, to help a reviewer.
Answer with the JSON object only.
