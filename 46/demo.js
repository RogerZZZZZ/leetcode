/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];

  const track = (nums, arr) => {
    if (arr.length === nums.length) {
      res.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const temp = nums[i];
      if (arr.includes(temp)) {
        continue;
      }

      arr.push(temp);
      track(nums, [...arr]);
      arr.pop();
    }
  }

  track(nums, [])
  return res;
};

console.log(permute([1,2,3]))