/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  const copy = intervals.sort((a, b) => a[0] - b[0]);
  const merges = [copy[0]];
  for (let i = 1; i < copy.length; i++) {
    const last = merges[merges.length - 1];
    const item = copy[i]
    if (item[0] <= last[1]) {
      last[1] = Math.max(last[1], item[1])
    } else {
      merges.push(item)
    }
  }
  return merges;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));