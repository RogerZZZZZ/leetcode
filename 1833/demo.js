/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
// const traverse = (index, costs, coins, count) => {
//   const coin = costs[index];
//   if (coin === undefined) return count;
//   let c1 = 0;
//   if (coins >= coin) {
//     c1 = traverse(index + 1, costs, coins - coin, count + 1);
//   }
//   const c2 = traverse(index + 1, costs, coins, count);
//   return Math.max(c1, c2);
// }

// var maxIceCream = function(costs, coins) {
//   if (costs.length === 0 || coins === 0) return 0;

//   return traverse(0, costs, coins, 0);
// };

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function (costs, coins) {
	costs.sort((a, b) => a - b)
	const costslen = costs.length
  let left = coins;
	for (let i = 0; i < costslen; i++) {
    const t = costs[i];
    if (t > left) {
      return i;
    }
    left -= t;
	}
	return costslen
}

console.log(maxIceCream([1,3,2,4,1], 7))
// console.log(maxIceCream([10,6,8,7,7,8], 5))
// console.log(maxIceCream([1,6,3,1,2,5], 20))
// console.log(maxIceCream([], 20))