/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  if (k > n) return res;

  const dp = (start, temp) => {
    if (temp.length === k) {
      res.push([...temp]);
      return;
    }

    for (let i = start; i <= n - (k - temp.length) + 1; i++) {
      temp.push(i)
      dp(i + 1, temp);
      temp.pop();
    }
  }


  dp(1, []);

  return res;
};

console.log(combine(4, 2));
console.log(combine(1, 1));