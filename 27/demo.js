/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   let i = 0;
//   while(nums[i] !== undefined) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return nums.length;
// };

// 覆盖方案
var removeElement = function(nums, val) {
  let i = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[i] = num;
      i++
    }
  }
  return i;
};

const a = [0,1,2,2,3,0,4,2]
console.log(removeElement(a, 2), a)