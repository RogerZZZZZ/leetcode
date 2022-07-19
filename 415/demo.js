/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;
  let index1 = n1 - 1;
  let index2 = n2 - 1;
  let flag = false;
  const res = [];
  while (index1 >= 0 && index2 >= 0) {
    const number1 = Number(num1[index1]);
    const number2 = Number(num2[index2]);
    const count = number1 + number2 + (flag ? 1 : 0);
    flag = count >= 10;
    res.unshift(count % 10)
    index1 -= 1;
    index2 -= 1;
  }

  while (index1 >= 0) {
    const number = Number(num1[index1]);
    const count = number + (flag ? 1 : 0)
    flag = count >= 10;
    res.unshift(count % 10);
    index1 --;
  }
  
  while (index2 >= 0) {
    const number = Number(num2[index2])
    const count = number + (flag ? 1 : 0)
    flag = count >= 10;
    res.unshift(count % 10);
    index2 --;
  }

  if (flag) {
    res.unshift('1')
  }
  return res.join('')
};

console.log(addStrings('11', '123'))
console.log(addStrings('456', '77'))
console.log(addStrings('4', '0'))
console.log(addStrings('9', '1'))