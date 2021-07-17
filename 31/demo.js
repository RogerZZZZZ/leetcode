/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length === 1) return nums;

  let i = nums.length - 2;
  while(i >= 0 && nums[i] >= nums[i+1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    const tmp = nums[j];
    nums[j] = nums[i];
    nums[i] = tmp;
  }
  let left = i + 1;
  let right = nums.length - 1
  while (left < right) {
    const tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
    left++;
    right--;
  }
  return nums;
};

console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,2,5]))
console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([1]))
console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([1,3,2]))