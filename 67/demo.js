/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let flag = false;
  const res = [];
  while (aIndex >= 0 && bIndex >= 0) {
    const n1 = Number(a[aIndex]);
    const n2 = Number(b[bIndex]);
    const cnt = n1 + n2 + (flag ? 1 : 0)
    if (cnt > 1) {
      flag = true;
      res.unshift(cnt % 2);
    } else {
      res.unshift(cnt);
      flag = false;
    }
    aIndex -= 1;
    bIndex -= 1;
  }

  while (aIndex >= 0) {
    const n = Number(a[aIndex]);
    const cnt = n + (flag ? 1 : 0);
    if (cnt > 1) {
      flag = true;
      res.unshift(cnt % 2);
    } else {
      flag = false;
      res.unshift(cnt);
    }
    aIndex -= 1;
  }

  while (bIndex >= 0) {
    const n = Number(b[bIndex]);
    const cnt = n + (flag ? 1 : 0);
    if (cnt > 1) {
      flag = true;
      res.unshift(cnt % 2);
    } else {
      flag = false;
      res.unshift(cnt);
    }
    bIndex -= 1;
  }
  if (flag) {
    res.unshift(1)
  }
  return res.join('');
};

console.log(addBinary('11', '1'))
console.log(addBinary('1', '11'))
console.log(addBinary('1010', '1011'))
console.log(addBinary('101111', '10'))