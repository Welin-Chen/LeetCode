/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let dp = Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

// var minCostClimbingStairs = function (cost) {
//   let n = cost.length;
//   let dp1 = 0,
//     dp2 = 0,
//     dp;
//   for (let i = 2; i <= n; i++) {
//     dp = Math.min(dp1 + cost[i - 2], dp2 + cost[i - 1]);
//     dp1 = dp2;
//     dp2 = dp;
//   }
//   return dp;
// };

// var minCostClimbingStairs = function (cost) {
//   let n = cost.length;
//   let dp = Array(n + 1).fill(0);
//   dp[0] = cost[0];
//   dp[1] = cost[1];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
//   }
//   return Math.min(dp[n - 1], dp[n - 2]);
// };

// var minCostClimbingStairs = function (cost) {
//   let n = cost.length;
//   let dp1 = cost[0],
//     dp2 = cost[1],
//     dp;
//   for (let i = 2; i < n; i++) {
//     dp = Math.min(dp1, dp2) + cost[i];
//     dp1 = dp2;
//     dp2 = dp;
//   }
//   return Math.min(dp1, dp2);
// };

// Example 1:

let cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
Output: 15;
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
Output: 6;
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.
