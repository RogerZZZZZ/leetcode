/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (String(num).length === 1) {
    return num;
  }
  const calc = (number) => {
    const str = String(number);
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      cnt += Number(str[i]);
    }
    if (String(cnt).length === 1) {
      return Number(cnt);
    }
    return calc(cnt)
  }

  return calc(num);
};

console.log(addDigits(38))
console.log(addDigits(0))