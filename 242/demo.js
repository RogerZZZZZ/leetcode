/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const a = s.split('').sort();
  const b = t.split('').sort();
  return a.join('') === b.join('');
};

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('anagram', 'nagaram'))