function maxChar(str) {
  const max_char_hash_map = {};
  max_count = 0;
  max_char = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    max_char_hash_map[char] = max_char_hash_map[char] + 1 || 1;

    if (max_char_hash_map[char] > max_count) {
      max_count = max_char_hash_map[char];
      max_char = char;
    }
  }
  return max_char;
}

console.log(maxChar("chukwuemekae"));

//time complexity is O(n) -- because it is dependent on the length of the input string

//Space complexity is O(1)  -- Because the highest length of the object is 26 which is reduced to 1
