var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = prices[i] - prices[i - 1];
    if (profit > 0) sum += profit;
  }
  return sum;
};

let prices = [7, 1, 5, 3, 6, 4];
Output: 7;
console.log(maxProfit(prices));
