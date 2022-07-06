/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = new Map();
  if (n === 1) return true;
  const count = (number) => {
    let cnt = 0;
    for (let i = 0; i < String(number).length; i++) {
      cnt += Math.pow(Number(String(number)[i]), 2)
    }
    return cnt
  }

  let number = count(n);

  while (!map.get(number)) {
    map.set(number, true);
    number = count(number);
    if (number === 1) return true;
  }

  return false;
};

console.log(isHappy(2))
console.log(isHappy(19))