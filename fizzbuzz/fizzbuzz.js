function fizzbuzz(params) {
  for (let i = 1; i <= params; i++) {
    let str = "";
    if (i % 3 == 0) {
      str += "fizz";
    }
    if (i % 5 == 0) {
      str += "buzz";
    }
    if (!str) {
      str = i;
    }
    console.log(str);
  }
}

fizzbuzz(17);
