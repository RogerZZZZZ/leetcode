/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  const sign = x < 0;
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  let tmp = x;
  if (sign) {
    tmp = Math.abs(x);
  }
  tmp = parseInt(tmp.toString().split('').reverse().join(''), 10)

  if (tmp > max || tmp < min) return 0

  return sign ? -1 * tmp : tmp
};

console.log('rever', reverse(-120))