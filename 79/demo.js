/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const usedMap = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const traverse = (temp, x, y, used) => {
    if (temp === word) return true;
    if (temp.length > word.length) return false;
    if (y >= m || x >= n || y < 0 || x < 0) return false
    if (used[y][x] === 1) return false
    
    used[y][x] = 1;
    temp += board[y][x];

    const flag =  traverse(temp, x + 1, y, [...used])
    || traverse(temp, x - 1, y, [...used])
    || traverse(temp, x, y + 1, [...used])
    || traverse(temp, x, y - 1, [...used])

    used[y][x] = 0
    return flag;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const flag = traverse('', j, i, usedMap);
      if (flag) {
        return true;
      }
    }
  }
  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))