function pyramid(params) {
  for (let i = 1; i <= params; i++) {
    space = " ".repeat(params - i);
    hash = "#".repeat(i * 2 - 1);
    console.log(space + hash + space);
  }
  return true;
}

console.log(pyramid(3));

// time complexity O(n^2)
// space complexity O(n)
