var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// let n = 2;
// Output: 2;
// console.log(climbStairs(n));

// n = 3;
// Output: 3;
// console.log(climbStairs(n));

n = 4;
console.log(climbStairs(n));
