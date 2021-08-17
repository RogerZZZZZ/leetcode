/**
 * @param {number[]} nums
 * @return {number}
 * 贪心算法
 */
var jump = function(nums) {
  let maxPosition = 0;
  let end = 0;
  const length = nums.length;
  let step = 0;

  for (let i = 0; i < length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      step += 1;
    }
  }
  return step;
};

console.log(jump([2,3,1,1,4]))
console.log(jump([2,3,0,1,4]))
console.log(jump([3,2,1]))