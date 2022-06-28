
var climbStairs = function(n) {
  const memory = {};
  const res = function dp(n) {
    if (n === 1 || n === 2) {
      return n
    }
    if (memory[n - 2] === undefined) {
      memory[n - 2] = dp(n - 2);
    }

    if (memory[n - 1] === undefined) {
      memory[n - 1] = dp(n - 1);
    }
    return memory[n] = memory[n - 1] + memory[n - 2]
  }
  return res(n)
};

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(5))