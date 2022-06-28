/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const a = s.trim().split(' ')
  return a[a.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))