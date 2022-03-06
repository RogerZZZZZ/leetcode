// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var minimalKSum = function(nums, k) {
//   const nonDuplicated = Array.from(new Set(nums.sort((a, b) => a - b)))
//   const min = nonDuplicated[0]
//   const max = nonDuplicated[nonDuplicated.length - 1];
//   let left = k;
//   if (left <= min - 1) {
//     return (1 + left) * left / 2;
//   }
//   let sum = min * (min - 1) / 2;
//   left -= (min - 1);
//   for (let i = min; i <= max && left > 0; i++) {
//     if (nonDuplicated.indexOf(i) === -1) {
//       sum += i;
//       left -= 1;
//     }
//   }
//   if (left > 0) {
//     sum += Array.from({ length: left }, (num, idx) => idx + max + 1).reduce((acc, item) => acc + item, 0)
//   }
//   return sum;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
  const nonDuplicated = Array.from(new Set(nums.sort((a, b) => a - b)))
  nonDuplicated.unshift(0);
  let sum = 0;
  for (let i = 1; i <= nonDuplicated.length - 1; i++) {
    if (k === 0) return sum;
    const begin = nonDuplicated[i - 1];
    const end = nonDuplicated[i]
    const n = end - begin - 1;
    if (k >= n) {
      sum += (begin + end) * n / 2;
      k -= n;
    } else {
      sum += (begin + 1 + begin + k) * k / 2
      k = 0
    }
  }
  sum += Array.from({length: k}, (_, idx) => nonDuplicated[nonDuplicated.length - 1] + idx + 1).reduce((acc, item) => acc + item, 0)
  return sum;
};

// console.log(minimalKSum([1,4,25,10,25], 2)) // 5
// console.log(minimalKSum([5, 6], 6)) // 25 7 + 8 
// console.log(minimalKSum([5, 6, 7, 9], 6)) // 25 8 + 10
// console.log(minimalKSum([53,41,90,33,84,26,50,32,63,47,66,43,29,88,71,28,83], 76)) // 3444
console.log(minimalKSum([1], 1000000000))