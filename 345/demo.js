/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const dict = ['a', 'e', 'i', 'o', 'u']
  const flags = [];
  const list = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const isAEIOU = dict.includes(item.toLocaleLowerCase());
    if (isAEIOU) {
      flags.push(i);
      list.push(item);
    }
  }

  if (list.length === 0) return s;

  const arr = s.split('');
  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];
    arr[flag] = list[list.length - 1 - i];

  }
  return arr.join('');
};

console.log(reverseVowels('hello'))
console.log(reverseVowels('aA'))