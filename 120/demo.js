/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const rowSize = triangle.length;
  const f = new Array(rowSize).fill(0).map(() => new Array(rowSize).fill(0))

  f[0][0] = triangle[0][0]
  for (let i = 1; i < rowSize; i++) {
    f[i][0] = f[i - 1][0] + triangle[i][0];

    for (let j = 1; j < i; j++) {
      f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j]
    }
    f[i][i] = f[i - 1][i - 1] + triangle[i][i];

  }

  let min = f[rowSize - 1][0]

  for (let i = 1; i < rowSize; i++) {
    min = Math.min(min, f[rowSize - 1][i])
  }

  return min;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-10]]))