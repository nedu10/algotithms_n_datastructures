function stringPattern(text, pattern) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== text[i + j]) {
        break;
      }
      if (j == pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringPattern("lolol", "lol"));
console.log(stringPattern("chineduollo", "lol"));
