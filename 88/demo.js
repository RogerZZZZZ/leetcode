/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let mSize = m;
  let nSize = n;
  let mIndex = 0;
  let nIndex = 0;
  let diff = nums1.length + nums2.length - m - n;

  while(mSize > 0) {
    const mItem = nums1[mIndex];
    while (nSize > 0) {
      const nItem = nums2[nIndex];
      if (nItem <= mItem) {
        nums1.splice(mIndex, 0, nItem);
        mIndex += 1;
        nIndex += 1;
        nSize -= 1;
      } else {
        break;
      }
    }
    mSize -= 1;
    mIndex += 1;
  }

  while (nSize) {
    const nItem = nums2[nIndex];
    nums1.splice(mIndex, 0, nItem)
    nSize -= 1;
    mIndex += 1;
    nIndex += 1;
  }

  while (diff) {
    nums1.pop();
    diff -= 1;
  }
  return nums1;
};

console.log(merge([1], 1, [], 0))
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([0], 0, [1], 1))