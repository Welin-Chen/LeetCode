/**
 * @param {string} s
 * @return {number}
 */
// 1.
// dp[i]:i以前的decode ways總和,dp[n]->s[n-1],dp[i]->s[i-1]
var numDecodings = function (s) {
  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    let two = s[i - 2] + s[i - 1];

    if (s[i - 1] !== "0") dp[i] += dp[i - 1];
    if (i >= 2 && s[i - 2] !== "0" && two <= "26") dp[i] += dp[i - 2];
  }
  return dp[n];
};

// 2.
// var numDecodings = function (s) {
//   let n = s.length;
//   let [dp0, dp1, dp2] = [0, 1, 0];

//   for (let i = 1; i <= n; i++) {
//     let two = s[i - 2] + s[i - 1];
//     dp2 = 0;
//     if (s[i - 1] !== "0") dp2 += dp1;
//     if (i >= 2 && s[i - 2] !== "0" && two <= "26") dp2 += dp0;
//     [dp0, dp1] = [dp1, dp2];
//   }
//   return dp2;
// };

let s = "12";
Output: 2;

// s = "06";
console.log(numDecodings(s));
