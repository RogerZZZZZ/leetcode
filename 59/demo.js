/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  let left = 0;
  let right = n - 1;
  let up = 0;
  let down = n - 1;
  let cnt = 1;

  const count = (x, y) => {
    res[x][y] = cnt;
    cnt += 1;
  }
  
  while (true) {
    for (let i = left; i <= right; i++) {
      count(up, i);
    }
    up += 1;
    if (up > down) break;

    for (let i = up; i <= down; i++) {
      count(i, right);
    }
    right -= 1;
    if (left > right) break;

    for (let i = right; i >= left; i--) {
      count(down, i);
    }
    down -= 1;
    if (up > down) break;

    for (let i = down; i >= up; i--) {
      count(i, left);
    }
    left += 1;
    if (right < left) break;
  }
  return res;
};

console.log(generateMatrix(3));
console.log(generateMatrix(4));