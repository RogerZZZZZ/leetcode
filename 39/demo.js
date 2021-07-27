/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const list = candidates.sort((a, b) => a - b);
  const res = [];

  const find = (index, left, arr) => {
    if (index >= list.length || left < 0) return;
    if (left === 0) {
      res.push(arr);
      return;
    }

    if (left < list[index]) return;

    find(index + 1, left, [...arr]);

    find(index, left - list[index], [...arr, list[index]]);
  }

  find(0, target, []);

  return res;
};

console.log(combinationSum([2,3,6,7], 7))