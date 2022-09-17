var maxProfit = function (prices) {
  let profit = 0;
  let max = 0;

  for (let i = 0, j = 1; j < prices.length; j++) {
    profit = prices[j] - prices[i];
    max = Math.max(max, profit);
    if (prices[j] < prices[i]) i = j;
  }
  return max;
};

let prices = [7, 1, 5, 3, 6, 4];
output: 5;

console.log(maxProfit(prices));
