/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  let cnt = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        nums[j] === nums[i]
        && (j * i) % k === 0
      ) {
        cnt += 1;
      }
    }
  }
  return cnt;
};

console.log(countPairs([1,2,3,4], 1))
console.log(countPairs([3,1,2,2,2,1,3], 2))