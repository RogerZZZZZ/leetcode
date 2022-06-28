/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let flag = false;
  let i = digits.length - 1;
  while (i >= 0) {
    const item = digits[i];
    if (item + 1 === 10) {
      digits[i] = 0;
      flag = true;
    } else {
      digits[i] = item + 1;
      return digits;
    }
    i -= 1;
  }
  if (flag) {
    digits.unshift(1);
  }
  return digits
};

console.log(plusOne([1,2,3]))
console.log(plusOne([1,2,9]))
console.log(plusOne([9,9,9]))
console.log(plusOne([0]))
console.log(plusOne([3]))
