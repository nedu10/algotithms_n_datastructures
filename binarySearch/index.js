// // note : binary search only work for sorted array

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // console.log("times");
    let mid_value = Math.floor((left + right) / 2);
    // console.log("mid >> ", mid_value);
    if (value == arr[mid_value]) {
      return mid_value;
    } else if (arr[mid_value] < value) {
      left = mid_value + 1;
    } else {
      right = mid_value - 1;
    }
  }
  return -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    19
  )
);
console.log(binarySearch([1, 2, 3, 4, 5], 2));

// time complexity O(log2(n))
// space complexity O(1)
