/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const n = columnTitle.length;
  let cnt = 0
  for (let i = n - 1; i >= 0; i--) {
    const c = columnTitle[i];
    const number = c.charCodeAt() - 'A'.charCodeAt() + 1;
    cnt += number * Math.pow(26, (n - i - 1));
  }
  return cnt;
};

console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))