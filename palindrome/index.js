function palindrome(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(palindrome("MaDam"));
console.log(palindrome("love"));

//space complexity O(n)  because the string can take any length
//time complexity O(n) because in the background reverse has O(n) time complexity

// Note***
// split, lowercase, join, reverse. They all use a forloop in the background
