/**
 * 57.19%
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  return Array.from({ length: n }, (el, index) => index)
    .reduce((acc, el) => acc ^= (start + el * 2), 0)
};

console.log(xorOperation(5, 0))