function linearSearchIndexOf(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (i == index) {
      return i;
    }
  }

  return -1;
}
function linearSearchInclude(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }

  return false;
}

function linearSearchFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) == true) {
      return arr[i];
    }
  }

  return undefined;
}
