/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length

  for (let i = 0; i < nums.length; i++) {
    let cnt = 1;
    let cutIndex = 0;
    let flag = false;
    while (nums[i] !== undefined && nums[i + 1] === nums[i]) {
      cnt += 1;
      if (cnt === 3) {
        cutIndex = i + 1;
        flag = true
      }
      i += 1
    }
    if (flag) {
      const diff = i + 1 - cutIndex;
      nums.splice(cutIndex, i + 1 - cutIndex);
      i -= diff;
    }
    flag = false;
    cnt = 1;
  }
  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,2,3,4,5]))
console.log(removeDuplicates([1,1,1,1,1,1,2,2]))
console.log(removeDuplicates([0,0,0,0]))