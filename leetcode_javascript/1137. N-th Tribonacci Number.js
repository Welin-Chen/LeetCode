/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = 1;
//   dp[2] = 1;

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//   }
//   return dp[n];
// };

var tribonacci = function (n) {
  if (n === 1 || n === 2) return 1;
  let [dp0, dp1, dp2, dp3] = [0, 1, 1, 0];

  for (let i = 3; i <= n; i++) {
    dp3 = dp0 + dp1 + dp2;
    [dp0, dp1, dp2] = [dp1, dp2, dp3];
  }
  return dp3;
};

let n = 4;
Output: 4;
console.log(tribonacci(n));

n = 25;
Output: 1389537;

console.log(tribonacci(n));
