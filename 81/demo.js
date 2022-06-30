/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const findInArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) {
        right = mid - 1;
      } else if (arr[mid] === target) {
        return true;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
  let cutIndex = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i + 1] !== undefined && nums[i + 1] < nums[i]) {
      cutIndex = i + 1;
      break
    }
  }
  const arr1 = nums.slice(0, cutIndex)
  const arr2 = nums.slice(cutIndex)
  return findInArray(arr1, target) || findInArray(arr2, target);
};

console.log(search([2,5,6,0,0,1,2], 0))
console.log(search([2,5,6,0,0,1,2], 3))

// 优化 直接使用二分法, nums[start] < nums[mid] 判断前半部分/后半部分是否有序