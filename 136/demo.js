/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
};

console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,1,2]))