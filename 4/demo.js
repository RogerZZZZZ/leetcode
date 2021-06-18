/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const mid = (len1 + len2) / 2;
  const isOdd = (len1 + len2) % 2

  if (mid === 0) {
    return len1 === 0 ? nums2[0] : nums1[0];
  }

  let index = 0;
  let i = 0;
  let j = 0;
  let now = 0;
  let last = now;
  const midNext = mid + isOdd;

  while (index <= midNext) {
    last = now;
    if (i >= len1) {
      now = nums2[j++];
    } else if (j >= len2) {
      now = nums1[i++];
    } else {
      now = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
    }
    index++;
  }

  if (isOdd) {
    return last;
  } else {
    return (last + now) / 2
  }
};

console.log(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]))
