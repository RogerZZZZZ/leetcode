/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    arr[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break;
    }
    arr[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
      }
    }
  }
  return arr[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([[[0,1],[0,0]]]))
console.log(uniquePathsWithObstacles([[0,0],[0,1]]))
console.log(uniquePathsWithObstacles([[1,0]]))