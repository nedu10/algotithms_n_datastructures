function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let savedIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[savedIdx]) {
        savedIdx = j;
      }
    }
    swap(arr, i, savedIdx);
  }

  return arr;
}

console.log(selectionSort([1, 3, 47, 8, 0]));

// time complexity is O(0.5(N^2 +N))  which is also reduced to O(N^2)
