// var fib = function (n) {
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };

var fib = function (n) {
  if (n === 1) return 1;
  let dp0 = 0;
  let dp1 = 1;
  let dp2 = 0;

  for (let i = 2; i <= n; i++) {
    dp2 = dp0 + dp1;
    [dp0, dp1] = [dp1, dp2];
  }

  return dp2;
};

let n = 2;
Output: 1;

console.log(fib(n));
n = 4;
Output: 3;

console.log(fib(n));
