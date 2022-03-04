/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 === 1) return [];
  const v = [];
  for (let i = 2; finalSum - i >= 0; i += 2) {
    v.push(i);
    finalSum -= i;
  }
  v[v.length - 1] += finalSum;
  return v;
};

console.log(maximumEvenSplit(28))
console.log(maximumEvenSplit(12))