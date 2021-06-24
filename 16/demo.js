/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  const size = nums.length
  let res = Number.MAX_VALUE;
  for(let b = 0; b < size - 2; ++b) {
      if( nums[b] === nums[b - 1]) continue
      let i = b + 1, j = size - 1
      while(i < j) {
          let sum = nums[b] + nums[i] + nums[j]
          if (sum === target) {
            return target;
          }
          if (sum > target) {
            j--;
          } else {
            i++;
          }
          if (Math.abs(sum - target) < Math.abs(res - target)) {
            res = sum;
          }
      }
  }
  return res
};