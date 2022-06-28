/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const results = [];
  if (matrix === null || matrix.length === 0) {
    return results;
  }

  let up = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      results.push(matrix[up][i]);
    }
    up += 1;

    if (up > down) break;

    for (let i = up; i <= down; i++) {
      results.push(matrix[i][right])
    }
    right -= 1;

    if (right < left) break;

    for (let i = right; i >= left; i--) {
      results.push(matrix[down][i]);
    }
    down -= 1;

    if (up > down) break;

    for (let i = down; i >= up; i--) {
      results.push(matrix[i][left])
    }
    left += 1;
    if (right < left) break
  }
  return results;
};