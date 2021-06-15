/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i-1]) {
      return i - 1;
    }
  }
  return -1;
};

console.log(peakIndexInMountainArray([1,2,3,2,1]))
console.log(peakIndexInMountainArray([0,1,0]))