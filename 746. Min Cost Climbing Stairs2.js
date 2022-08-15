// var minCostClimbingStairs = function (cost) {
//   let n = cost.length;
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = cost[0];
//   dp[1] = cost[1];

//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
//   }
//   return Math.min(dp[n - 1], dp[n - 2]);
// };

var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

let cost = [10, 15, 20];
Output: 15;
console.log(minCostClimbingStairs(cost));

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
Output: 6;
console.log(minCostClimbingStairs(cost));
