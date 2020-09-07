function anagram(string1, string2) {
  const hash_maps = {};
  string1 = string1.toLowerCase().replace(/[\W_]+/g, "");
  string2 = string2.toLowerCase().replace(/[\W_]+/g, "");
  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];
    hash_maps[char] = hash_maps[char] + 1 || 1;
  }

  for (let k = 0; k < string2.length; k++) {
    const char2 = string2[k];
    if (!hash_maps[char2]) {
      return false;
    }
    hash_maps[char2]--;
  }

  return true;
}

console.log(anagram("earTeartH@", "     Heart"));
console.log(anagram("earth", "Heart!"));
console.log(anagram("lcol", "lolc"));

// time complexity O(n)

// space complexity O(1)

// Javascript sorting algorithn has a time complexity of O(nLog(n))
