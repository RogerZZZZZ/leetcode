/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = Number.MIN_SAFE_INTEGER;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return Math.max(0, maxProfit);
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,5,4,3,2,8]))