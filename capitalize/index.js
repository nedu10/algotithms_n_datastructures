function capitalize(word) {
  wordArr = word.split(" ");
  capitalizeWordArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    const str = wordArr[i];
    capitalizeWordArr.push(str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  return capitalizeWordArr.join(" ");
}

console.log(capitalize("i love the girl playing a football"));

// time complexity O(n)
// space complexity O(n)
