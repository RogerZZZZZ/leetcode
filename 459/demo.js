/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  if (s.length <= 1) return false
  const mid = Math.ceil(s.length / 2);
  let offset = 1;
  while (offset <= mid) {
    if (s.length % offset !== 0) {
      offset += 1;
      continue;
    }
    const subStr = s.slice(0, offset);
    let cnt = 1;
    while (
      cnt * offset <= s.length
      && subStr === s.slice(cnt * offset, (cnt + 1) * offset)
    ) {
      cnt += 1;
    }
    if (cnt * offset === s.length) {
      return true;
    }
    offset += 1;
  }

  return false;
};

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))