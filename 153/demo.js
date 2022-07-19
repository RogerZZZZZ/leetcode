/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const item = nums[mid];
    if (item < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};

// console.log(findMin([3, 4, 5, 1, 2]))
// console.log(findMin([1, 2, 3, 4, 5]))
console.log(findMin([2, 3, 4, 5, 1]))