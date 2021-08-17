/**
 * @param {number} n
 * @return {number}
 */
const map = new Map();
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const mapValue = map.get(n);
  if (mapValue) {
    return mapValue;
  }

  const value = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  map.set(n, value);
  return value;
};

console.log(tribonacci(25))