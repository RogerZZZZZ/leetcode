/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let cur = 0;
  let left = 0;
  let right = nums.length - 1;
  
  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b]
    nums[b] = temp;
  }

  while (cur <= right) {
    if (nums[cur] === 0) {
      swap(cur, left);
      left += 1;
      cur += 1;
    } else if (nums[cur] === 2) {
      swap(cur, right)
      right -= 1;
    } else {
      cur += 1
    }
  }
  return nums;
};

console.log(sortColors([2,0,0,1,1,0]))