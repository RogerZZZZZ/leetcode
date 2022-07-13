/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let sumOfGas = 0;
    let sumOfCost = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      sumOfGas += gas[j]
      sumOfCost += cost[j]
      if (sumOfCost > sumOfGas) {
        break;
      }
      cnt ++;
    }
    // 循环了一圈
    if (cnt === n) {
      return i
    } else {
      i += cnt + 1;
    }
  }
  return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))