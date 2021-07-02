/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s) return 0
  const map = {
    I: { v: 1, idx: 0 },
    V: { v: 5, idx: 1 },
    X: { v: 10, idx: 2 },
    L: { v: 50, idx: 3 },
    C: { v: 100, idx: 4 },
    D: { v: 500, idx: 5 },
    M: { v: 1000, idx: 6 },
  };

  let index = 0;
  let count = 0
  while (s[index] !== undefined) {
    const t = s[index];
    const item = map[t];
    if (s[index + 1] && map[s[index + 1]].idx > item.idx) {
      count += map[s[index + 1]].v - item.v;
      index += 2
    } else {
      count += item.v;
      index += 1;
    }
  }
  return count;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
