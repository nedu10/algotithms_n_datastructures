function vowel(str) {
  const available_vowel = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (available_vowel.indexOf(char) >= 0) {
      count++;
    }
  }
  return count;
}

console.log(vowel("schKEzny"));
console.log(vowel("chinEdu"));

// time complexity O(n)
// space complexity O(1)]
