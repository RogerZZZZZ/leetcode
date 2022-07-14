/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map();

  for (const number of nums1) {
    const cache = map.get(number);
    if (cache !== undefined) {
      console.log(cache);
      map.set(number, cache + 1);
    } else {
      map.set(number, 1);
    }
  }

  const res = [];
  for (const number of nums2) {
    const cache = map.get(number);
    if (cache !== undefined && cache > 0) {
      res.push(number);
      map.set(number, cache - 1);
    }
  }

  return res;
};

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))