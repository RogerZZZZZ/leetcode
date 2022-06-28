/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const size = nums.length;
  let max = 0;
  let len = 0;
  for (let i = 0; i < size - 1; i++) {
    len = i + nums[i];
    if (len === i && max === i) return false;
    if (len > max) max = len;
  }
  return true;
};