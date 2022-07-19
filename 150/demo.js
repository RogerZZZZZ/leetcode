/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const list = [];

  const isOperator = (operator) => {
    return ['+', '-', '*', '/'].includes(operator);
  }

  while (tokens.length) {
    const item = tokens.shift();
    if (isOperator(item)) {
      // TODO
      const n1 = Number(list.pop());
      const n2 = Number(list.pop());
      let cnt = 0;
      if (item === '+') {
        cnt = n1 + n2;
      } else if (item === '-') {
        cnt = n2 - n1;
      } else if (item === '*') {
        cnt = n1 * n2;
      } else if (item === '/') {
        cnt = parseInt(n2 / n1);
      }
      list.push(cnt);
    } else {
      list.push(item);
    }
  }
  return list[0];
};

console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))