/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxF = nums[0];
  let minF = nums[0];
  let ans = nums[0];
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    const mx = maxF;
    const mn = minF;
    maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(maxF, ans);
  }
  return ans;
};

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 0, -1]))
console.log(maxProduct([-2]))