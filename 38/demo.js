/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";

  return say('1', n - 1);
};

const say = (str, n) => {
  if (n === 0) return str;

  let res = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    let pre = str[i];
    while (str[i + 1] === str[i]) {
      count++;
      i++;
    }
    res += `${count}${pre}`
  }

  return say(res, n - 1);
}

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))