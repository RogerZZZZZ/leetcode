/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let begin = 0;
  let end = x;
  if (x === 1 || x === 0) return x;
  
  while (end - begin !== 1) {
    const mid = Math.floor((begin + end) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid;
    } else {
      begin = mid
    }
  }
  return begin;
};