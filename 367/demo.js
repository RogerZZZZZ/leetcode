/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = Math.pow(mid, 2);
    if (midNum === num) {
      return true;
    } else if (midNum > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(9))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(5))