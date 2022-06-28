/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
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

var insert = function(intervals, newInterval) {
  const [ x1, x2 ] = newInterval;
  // 处理第一个
  if (intervals.length ===0 || x2 < intervals[0][0]) {
    intervals.unshift(newInterval);
    return merge(intervals);
  }
  for (let i = 0; i < intervals.length; i++) {
    const item = intervals[i];
    if (
      x1 >= item[0]
      && x1 < item[1]
    ) {
      item[1] = Math.max(x2, item[1])
      return merge(intervals);
    }
  }
  intervals.push(newInterval);
  return merge(intervals);
};

console.log(insert([[1,3],[6,9]], [2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))