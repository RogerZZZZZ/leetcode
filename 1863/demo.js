// /**
//  * @version 1 55.79%
//  * @param {number[]} nums
//  * @return {number}
//  */
// const getAllSubsets =
//   theArray => theArray.reduce(
//     (subsets, value) => subsets.concat(subsets.map(set => [value,...set])),
//   [[]]
// );

// var subsetXORSum = function(nums) {
//   const allSubs = getAllSubsets(nums);

//   return allSubs.reduce((acc, item) => {
//     acc += item.reduce((subAcc, el) => subAcc = subAcc ^ el, 0)
//     return acc;
//   }, 0)
// };

/**
 * @version 2 98.25%
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let cnt = 0;
  nums.reduce(
    (subsets, value) => {
      return subsets.concat(
        subsets.map((set) => {
          const arr = [value, ...set];
          cnt += arr.reduce((subAcc, el) => (subAcc = subAcc ^ el), 0);
          return arr;
        })
      );
    },
    [[]]
  );

  return cnt;
};

console.log(subsetXORSum([1, 3]));
