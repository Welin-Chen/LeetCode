/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   function dfs(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return dfs(n - 1) + dfs(n - 2);
//   }
//   return dfs(n);
// };

var fib = function (n) {
  dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// n=30-> 832040
console.log(fib(30));
// Example 1:

Input: n = 2;
Output: 1;
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

Input: n = 3;
Output: 2;
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

Input: n = 4;
Output: 3;
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
