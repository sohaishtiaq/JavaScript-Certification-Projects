function isPalindrome(word) {
  word = word.toLowerCase();
  return word === word.split("").reverse().join("");
}

function findPalindromeBreaks(words) {
  let breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  let repeatedPhrases = [];

  if (phraseLength >= words.length) {
    return [];
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    for (let j = i + 1; j <= words.length - phraseLength; j++) {
      let phrase1 = words.slice(i, i + phraseLength).join(" ");
      let phrase2 = words.slice(j, j + phraseLength).join(" ");

      if (phrase1 === phrase2) {
        repeatedPhrases.push(i);
        repeatedPhrases.push(j);
      }
    }
  }

  return [...new Set(repeatedPhrases)].sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  let results = [];

  for (let text of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text)
    });
  }

  return results;
}
