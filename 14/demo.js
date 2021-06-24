/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = '';
  let index = 0;
  while (true) {
    const ichar = strs[0][index];
    if (!ichar) return str;
    for (let i = 1; i < strs.length; i++) {
      const s = strs[i];
      if (index >= s.length) {
        return str;
      }
      if (s[index] !== ichar) {
        return str;
      }
    }
    str += ichar;
    index += 1;
  }
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
