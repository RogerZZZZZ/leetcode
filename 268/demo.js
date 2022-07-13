/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let xor = 0;
  for (const n of nums) {
    xor ^= n;
  }

  for (let i = 0; i <= nums.length; i++) {
    xor ^= i;
  }

  return xor;
};

console.log(missingNumber([3,0,1]));