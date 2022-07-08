/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const res = []
  if (nums.length === 0) return res;

  for (let i = 0; i < nums.length; i++) {
    let start = i;
    let end = i;
    while (nums[i + 1] === nums[i] + 1) {
      end = i + 1;
      i++;
    }

    if (start !== end) {
      res.push(`${nums[start]}->${nums[end]}`)
    } else {
      res.push(nums[start].toString());
    }
  }

  return res;
};

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))