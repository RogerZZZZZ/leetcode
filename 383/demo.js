/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++)  {
    const cache = map.get(magazine[i]);
    if (cache !== undefined) {
      map.set(magazine[i], cache + 1);
    } else {
      map.set(magazine[i], 1)
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const cache = map.get(ransomNote[i]);
    if (cache === undefined || cache === 0) {
      return false;
    } else {
      map.set(ransomNote[i], cache - 1);
    }
  }
  return true;
};

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))