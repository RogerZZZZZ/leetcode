/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const createPattern = (list) => {
    const map = new Map();
    let cnt = 1;
    let p = '';
    for (let item of list) {
      if (map.get(item)) {
        p += map.get(item);
      } else {
        map.set(item, cnt);
        p += cnt
        cnt ++;
      }
    }
    return p;
  }
  return createPattern(pattern.split('')) === createPattern(s.split(' '))
};

console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abbc', 'dog cat cat dog'))
console.log(wordPattern('abc', 'b c a'))