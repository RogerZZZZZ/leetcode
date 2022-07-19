/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const str = s.trim();
  return str.split(' ').filter(v => v).reverse().join(' ')
};

console.log(reverseWords('  hello world  '))
console.log(reverseWords("a good   example"))