/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  if (n + m !== s3.length) return false;

  const f = new Array(n + 1).fill(false).map(() => new Array(m + 1).fill(false));
  f[0][0] = true
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const p = i + j - 1;
      if (i > 0) {
        f[i][j] = f[i][j] || (f[i - 1][j] && s1[i - 1] === s3[p]);
      }
      if (j > 0) {
        f[i][j] = f[i][j] || (f[i][j - 1] && s2[j - 1] === s3[p])
      }
    }
  }
  return f[n][m]  
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
