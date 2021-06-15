/**
 * 57%
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let len = nums.length;
  const map = new Map();
  map.set(nums[0], 0);
  for (let i = 1; i < len; i++) {
      let other = target - nums[i];
      if (map.get(other) !== undefined) return [map.get(other), i];
      map.set(nums[i], i)
  }
};
