/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  if (num % 3 !== 0) return [];
  const base = num / 3;
  return [base - 1, base, base + 1];
};