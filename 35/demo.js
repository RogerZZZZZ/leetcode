/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = nums.length;

  if (target <= nums[left]) return 0
  if (target >= nums[right]) return nums.length

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
};

// console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3], 3))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))
// console.log(searchInsert([1,3,5,7], 6))
