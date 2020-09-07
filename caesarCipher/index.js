function caesar(word, key) {
  const ref_apha_arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let new_word = "";
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    let is_string = /^[A-Z]*$/.test(char);
    let idx = is_string
      ? ref_apha_arr.indexOf(char.toLowerCase())
      : ref_apha_arr.indexOf(char);

    if (idx == -1) {
      new_word += char;
      continue;
    }

    let new_idx = idx + key;

    if (new_idx < 0) {
      new_idx += 26;
    }

    new_idx %= 26;

    new_word += is_string
      ? ref_apha_arr[new_idx].toUpperCase()
      : ref_apha_arr[new_idx];
  }

  return new_word;
}

console.log(caesar("ChiNedu!!3@gmail.cOm is playing", 2));
