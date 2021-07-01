/**
 * @param {number} n
 * @return {string[]}
 */
const traverse = (curStr, left, right, res) => {
  if (left === 0 && right === 0) {
    res.push(curStr);
    return;
  }

  if (left > right) return;

  if (left > 0) {
    traverse(curStr + '(', left - 1, right, res);
  }
  if (right > 0) {
    traverse(curStr + ')', left, right - 1, res);
  }
}

var generateParenthesis = function(n) {
  const res = []
  if (n === 0) return res;

  traverse('', n, n, res);

  return res;
};

console.log('re', generateParenthesis(3))