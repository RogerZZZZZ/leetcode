/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] === 0) {
      return 1;
    }
    if (grid[x][y] === 2) {
      return 0;
    }

    grid[x][y] = 2;

    let res = 0;
    for (let i = 0; i < 4; i++) {
      const tx = x + dx[i];
      const ty = y + dy[i];
      res += dfs(tx, ty);
    }
    return res;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        ans += dfs(i, j)
      }
    }
  }
  return ans
};

