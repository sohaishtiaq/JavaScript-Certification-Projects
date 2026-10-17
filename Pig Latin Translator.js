function translatePigLatin(str) {
  const vowels = "aeiou";

  if (vowels.includes(str[0])) {
    return str + "way";
  }

  let vowelIndex = -1;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelIndex = i;
      break;
    }
  }

  if (vowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
}
