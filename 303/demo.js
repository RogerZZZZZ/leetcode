/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let cnt = 0;
  for (let i = left; i <= right; i++) {
    cnt += this.nums[i];
  }
  return cnt;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */