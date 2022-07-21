/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s = x ^ y, ret = 0;
  while (s != 0) {
    ret += s & 1;
    s >>= 1;
  }
  return ret;
};

console.log(hammingDistance(5, 2))