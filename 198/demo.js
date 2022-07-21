/**
 * @param {number[]} nums
 * @return {number}
 * @desc 超时
 */
// var rob = function(nums) {
//   const n = nums.length;
//   const robAction = (index, hasRobbed, value) => {
//     if (index >= n) return value;
//     // 前一家没有抢过 这一家可以抢
//     if (!hasRobbed) {
//       return Math.max(
//         // 抢这一家
//         robAction(index + 1, true, value + nums[index]),
//         // 不抢这一家
//         robAction(index + 1, false, value)
//       )
//     }

//     // 前一家抢过 不能抢
//     return robAction(index + 1, false, value);
//   };

//   return robAction(0, false, 0);
// };

var rob = function(nums) {
  if (nums === null || nums.length === 0) return 0;
  const n = nums.length;
  if (n === 1) return nums[0]
  let first = nums[0];
  let second = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))