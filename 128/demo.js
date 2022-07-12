/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  let longestStreak = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let curNum = num;
      let curStreak = 1;

      while (set.has(curNum + 1)) {
        curStreak += 1;
        curNum += 1;
      }

      longestStreak = Math.max(longestStreak, curStreak);
    }
  }
  return longestStreak
};