function chunk(data, length) {
  chunk_output = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (
      !chunk_output.length ||
      chunk_output[chunk_output.length - 1].length >= length
    ) {
      let new_element = chunk_output.push([element]);
    } else {
      chunk_output[chunk_output.length - 1].push(element);
    }
  }

  return chunk_output;
}

console.log(
  chunk([1, 4, 5, 6, 3, 4, 56, 789, 43, 0, 3, 65, "rr", 5, "reee"], 3)
);
console.log(
  chunk([1, 4, 5, 6, 3, 4, 56, 789, 43, 0, 3, 65, "rr", 5, "reee"], 1)
);
console.log(
  chunk([1, 4, 5, 6, 3, 4, 56, 789, 43, 0, 3, 65, "rr", 5, "reee"], 6)
);
console.log(
  chunk([1, 4, 5, 6, 3, 4, 56, 789, 43, 0, 3, 65, "rr", 5, "reee"], 8)
);
console.log(
  chunk([1, 4, 5, 6, 3, 4, 56, 789, 43, 0, 3, 65, "rr", 5, "reee"], 18)
);

// time complexity O(n)
// space complexity O(n)
