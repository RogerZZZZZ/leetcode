/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const t = s[i];
    if (
      t === ')'
      || t === '}'
      || t === ']'
    ) {
      const first = stack.pop();
      if (t === ')' && first !== '(') {
        return false;
      }
      if (t === '}' && first !== '{') {
        return false;
      }
      if (t === ']' && first !== '[') {
        return false;
      }
    } else {
      stack.push(t);
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'))
console.log(isValid('({})'))
console.log(isValid('('))