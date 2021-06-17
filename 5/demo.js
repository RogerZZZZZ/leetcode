/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (s.length < 2) return s

  let res = ''

  const method = (i, j) => {
    while(i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }

    if (j - i - 1 > res.length) {
      res = s.slice(i + 1, j)
    }
  }

  for (let i = 0; i < s.length; i++) {
    method(i ,i)
    method(i ,i + 1)
  }

  return res;
};


console.log(longestPalindrome('babad'))
