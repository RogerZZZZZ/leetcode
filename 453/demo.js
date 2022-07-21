/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  const min = Math.min(...nums);
  let ret = 0;
  for (const num of nums) {
    ret += (num - min);
  }
  return ret;
};