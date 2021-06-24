/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const s = String(x);
  return s === s.split('').reverse().join('');
};

console.log(isPalindrome(-123))
console.log(isPalindrome(123))
console.log(isPalindrome(121))
console.log(isPalindrome(1221))
