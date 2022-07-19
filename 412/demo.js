/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const can3 = i % 3 === 0;
    const can5 = i % 5 === 0;
    if (can3 && can5) {
      res.push('FizzBuzz')
      continue;
    } else if (can3) {
      res.push('Fizz')
      continue
    } else if (can5) {
      res.push('Buzz');
      continue
    }

    res.push(i.toString());
  }
  return res;
};