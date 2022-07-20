/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let j = 0; j <= amount; j++) {
    for (let c of coins) {
      if (j >= c) {
        dp[j] = Math.min(dp[j - c] + 1, dp[j]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

let coins = [1, 2, 5],
  amount = 11;
// Output: 3;
// let coins = [2],
//   amount = 3;
// Output: -1;
// let coins = [1],
//   amount = 0;
Output: 0;

console.log(coinChange(coins, amount));
