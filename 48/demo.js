/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  const copy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][n - i - 1] = copy[i][j]
    }
  }
  return matrix;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[1]]))