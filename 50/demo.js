/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  const quickMul = (newX, newN) => {
    let ans = 1;
    let xContri = newX;
    let N = newN;
    while (N > 0) {
      if (N % 2 === 1) {
        ans *= xContri;
      }
      xContri *= xContri;
      N = parseInt(N / 2, 10);
    }
    return ans;
  }
  return n >= 0 ? quickMul(x, n) : (1 / quickMul(x, -n))
};

console.log(myPow(2, 10))
console.log(myPow(2,-2147483648))