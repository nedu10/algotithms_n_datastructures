function steps(params) {
  for (let i = 1; i <= params; i++) {
    let step = "";
    step += "#".repeat(i);
    step += " ".repeat(params - i);
    console.log(step);
  }
  return true;
}

console.log(steps(3));

// time complexity O(n^2)
// space complexity O(n)
