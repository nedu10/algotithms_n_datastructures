function reverseInt(int) {
  let sign = int < 0 ? "-" : "+";
  let reverseStr = int.toString().split("").reverse().join("");
  return sign == "+" ? parseInt(reverseStr) : -parseInt(reverseStr);
}

console.log(reverseInt(50));
console.log(reverseInt(-200));
console.log(reverseInt(-205));
console.log(reverseInt(0));

//time complexity  is O(log10(N)) because if the input increase by factor of 10 then the time complexity increases by 1
