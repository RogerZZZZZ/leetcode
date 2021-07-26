/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length;
  if (len === 0) return [-1, -1];
  if (len === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  let l = 0;
  let r = len - 1;
  let index = -1;
  while (l <= r) {
    const mid = Math.ceil((l + r) / 2);
    if (nums[mid] === target) {
      index = mid;
      break;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  let left = index;
  let right = index;
  if (index !== -1) {
    while (nums[left - 1] === target) {
      left --;
    } 

    while (nums[right + 1] === target) {
      right ++;
    }
  }
  return [left, right];
};

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 9))
console.log(searchRange([5,7,7,8,8,8,8,8,8,8,8,810], 8))