function mergedSort(sortedArr1, sortedArr2) {
  let result_arr = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (sortedArr1[pointer1] && sortedArr2[pointer2]) {
    if (sortedArr1[pointer1] <= sortedArr2[pointer2]) {
      result_arr.push(sortedArr1[pointer1]);
      pointer1++;
    } else {
      result_arr.push(sortedArr2[pointer2]);
      pointer2++;
    }
  }
  while (sortedArr1[pointer1]) {
    result_arr.push(sortedArr1[pointer1]);
    pointer1++;
  }
  while (sortedArr2[pointer2]) {
    result_arr.push(sortedArr2[pointer2]);
    pointer2++;
  }

  return result_arr;
}

console.log(mergedSort([1, 2, 3], [2, 3, 4, 5, 6, 7]));

// time complexity 0(n)
