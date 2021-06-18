/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.trim();

  if (str.length === 0) return 0;
  let first = str[0];
  let sign = false;
  if (first === '-' || first === '+') {
    str = str.substr(1, str.length);
    sign = first === '-';
  }
  for (let i = 0; i < str.length; i++) {
    if (Number.isNaN(Number(str[i])) || str[i] === ' ') {
      str = str.substr(0, i);
    }
  }
  let number = parseInt(str || '0', 10) * (sign ? -1 : 1);
  const maxNumber = Math.pow(2, 31) - 1;
  const minNumber = -Math.pow(2, 31);

  return number > maxNumber ? maxNumber : number < minNumber ? minNumber : number;
};

console.log('myA', myAtoi('+ 413'))
