/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (len === 0 || numRows === 1) return s;
  let str = '';
  
  const maxGap = (numRows - 1) * 2;
  for (let i = 0; i < numRows; i++) {
    let start = i;
    let add = i * 2
    while (start < len) {
      str += s[start];
      add = maxGap - add;
      start += (i === 0 || i === numRows - 1) ? maxGap : add;
    }
  }
  return str;
};

// console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR')
// console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI')
console.log(convert('A', 1))
