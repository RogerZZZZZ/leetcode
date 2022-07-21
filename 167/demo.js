/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const n = numbers.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([-1, 0], -1))