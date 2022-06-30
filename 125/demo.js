/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const newStr = s
    .split(' ')
    .join('')
    .replace(/[^a-zA-Z0-9]/g,"")
    .toLocaleLowerCase();
  return newStr === newStr.split('').reverse().join('')
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))