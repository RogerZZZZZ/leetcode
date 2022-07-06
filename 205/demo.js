/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const convert = (str) => {
    const map = new Map();
    let res = [];
    let cnt = 1;
    for (let i = 0; i < str.length; i++) {
      const t = str[i];
      if (map.get(t)) {
        res.push(map.get(t))
      } else {
        map.set(t, cnt);
        res.push(cnt)
        cnt += 1;
      }
    }
    return res.join('')
  }

  const str1 = convert(s)
  const str2 = convert(t)
  return str1 === str2;
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))