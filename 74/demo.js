/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = n - 1;
    if (target < matrix[i][left]) {
      return false;
    }
    if (target === matrix[i][left] || target === matrix[i][right]) {
      return true;
    }

    if (target < matrix[i][right]) {
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (target < matrix[i][mid]) {
          right = mid;
        } else if (target === matrix[i][mid]) {
          return true;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 0))