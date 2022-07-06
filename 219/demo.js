/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      const arr = map.get(nums[i])
      for (const item of arr) {
        if (i - item <= k) {
          return true;
        }
      }
    }
    const arr = map.get(nums[i]) || [];
    arr.push(i);
    map.set(nums[i], arr)
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,2], 1))