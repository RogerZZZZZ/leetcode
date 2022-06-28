/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const row = new Array(m).fill(false)
  const column = new Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || column[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
