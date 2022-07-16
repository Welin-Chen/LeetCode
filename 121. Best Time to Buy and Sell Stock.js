/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = -Infinity,
    min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

// let prices = [7, 1, 5, 3, 6, 4];
let prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
