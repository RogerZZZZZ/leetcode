/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n <= 0) return false;
  if (n < 3) return true;
  const factor = [2, 3, 5];
  for (const f of factor) {
    while (n % f === 0) {
      n /= f;
    }
  }
  return n === 1
};

console.log(isUgly(6))
console.log(isUgly(9))
console.log(isUgly(1))
console.log(isUgly(11))