/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (Number(nums.join(''))) {
    return nums
      .map((e) => e.toString())
      .sort((a, b) => (b + a) - (a + b))
      .join('');
  }
  return '0'
};

console.log(largestNumber([3,30,34,5,9]))