/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const len = nums.length;
  if (len === 0) return -1
  if (len === 1) return nums[0] === target ? 0 : -1;

  let l = 0;
  let r = len - 1;
  while (l <= r) {
    const mid = Math.ceil((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[len - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1
};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))