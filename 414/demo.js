/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const n = sorted.length;
  let cnt = 2;
  let cur = nums[n - 1];
  
  for (i = n - 2; i >= 0; i--) {
    if (cnt === 0) break;
    if (nums[i] !== cur) {
      cur = nums[i]
      cnt --;
    }
  }
  return cnt === 0 ? cur : nums[n - 1];
};

// console.log(thirdMax([3,2]))
console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]))