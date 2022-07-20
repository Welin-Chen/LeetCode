/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};

// var change = function (amount, coins) {
//   let dp = Array(amount + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j <= amount; j++) {
//       dp[j] = dp[j] + dp[j - coins[i]];
//     }
//   }
//   return dp[amount];
// };

// let amount = 5,
//   coins = [1, 2, 5];
// Output: 4;

let amount = 14511,
  coins = [1, 5, 10, 25]; //4092222339

// let amount = 10,
//   coins = [10];

console.log(change(amount, coins));
