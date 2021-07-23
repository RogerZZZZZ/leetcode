/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);

  let max = 1;
  let total = 0;
  let l = 0;
  for (let i = 1; i < nums.length; i++) {
    total += (nums[i] - nums[i - 1]) * (i - l);
    while (total > k) {
      total -= nums[i] - nums[l];
      l += 1;
    }
    max = Math.max(max, i - l + 1);
  }

  return max;
};