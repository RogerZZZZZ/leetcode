/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    const n = nums[i];
    if (n === 0) {
      nums.splice(i, 1);
      nums.push(0);
      len--;
      i--;
    }
  }
};


console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0,1,0]))