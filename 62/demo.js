/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    arr[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    arr[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1]
};

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))
console.log(uniquePaths(3, 3))