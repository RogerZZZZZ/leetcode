/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sLength = s.length;
  const tLength = t.length;
  if (sLength > tLength) return false;
  if (sLength === tLength) return s === t;

  let index = 0;
  let indexT = 0;

  while (index < sLength && indexT < tLength) {
    const item = s[index];
    const itemT = t[indexT];

    if (item === itemT) {
      index += 1;
    }

    indexT += 1;
  }

  if (index === sLength) {
    return true;
  }
  return false;
};

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))