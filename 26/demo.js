/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let prev = null
  let prevIndex = 0
  for (let i = 0; i < nums.length; i ++) {
      if (prev !== nums[i]) {
          prev = nums[i]
          nums[prevIndex ++] = nums[i]
      }
  }
  nums.length = prevIndex
};