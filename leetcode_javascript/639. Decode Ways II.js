/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function (s) {
//   let mod = 1e9 + 7;
//   let n = s.length;
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 1;

//   for (let i = 1; i <= n; i++) {
//     if (s[i - 1] === "*") dp[i] = dp[i] + dp[i - 1] * 9;
//     else if (s[i - 1] !== "0") dp[i] = dp[i] + dp[i - 1];

//     if (i >= 2) {
//       let two = s[i - 2] + s[i - 1];
//       if (s[i - 1] === "*" && s[i - 2] === "*") {
//         dp[i] = dp[i] + dp[i - 2] * 15;
//       } else if (s[i - 1] === "*" && s[i - 2] !== "*") {
//         if (s[i - 2] === "1") dp[i] = dp[i] + dp[i - 2] * 9;
//         else if (s[i - 2] === "2") dp[i] = dp[i] + dp[i - 2] * 6;
//         else dp[i] = dp[i] + dp[i - 2] * 0;
//       } else if (s[i - 1] !== "*" && s[i - 2] === "*") {
//         if (s[i - 1] <= "6") dp[i] = dp[i] + dp[i - 2] * 2;
//         else if (s[i - 1] > 6) dp[i] = dp[i] + dp[i - 2] * 1;
//         else dp[i] = dp[i] + dp[i - 2] * 0;
//       } else if (s[i - 2] !== "0" && two <= "26") {
//         dp[i] = dp[i] + dp[i - 2];
//       }
//     }
//     dp[i] = dp[i] % mod;
//   }
//   return dp[n];
// };

// 2.
var numDecodings = function (s) {
  let mod = 1e9 + 7;
  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    let c = 0;
    let s1 = s[i - 1];
    let s0 = s[i - 2];

    // pick one number
    if (s1 !== "0") {
      c = s1 === "*" ? 9 : 1;
      dp[i] += dp[i - 1] * c;
    }

    // pick two number
    if (i >= 2 && s0 !== "0") {
      let two = s0 + s1;
      if (s0 === "*" && s1 === "*") c = 15;
      else if (s0 === "*" && s1 !== "*") {
        c = s1 <= "6" ? 2 : 1;
      } else if (s0 !== "*" && s1 === "*") {
        if (s0 === "1") c = 9;
        else if (s0 === "2") c = 6;
        else c = 0;
      } else if (two <= "26") c = 1;
      else c = 0;
      dp[i] += dp[i - 2] * c;
    }
    dp[i] %= mod;
  }
  return dp[n];
};

// 3.
// var numDecodings = function (s) {
//   let mod = 1e9 + 7;
//   let n = s.length;
//   let dp0 = 0,
//     dp1 = 1,
//     dp2 = 0;

//   for (let i = 1; i <= n; i++) {
//     let c = 0;
//     let s1 = s[i - 1];
//     let s0 = s[i - 2];
//     dp2 = 0;

//     // pick one number
//     if (s1 !== "0") {
//       c = s1 === "*" ? 9 : 1;
//       dp2 += dp1 * c;
//     }

//     // pick two number
//     if (i >= 2 && s0 !== "0") {
//       let two = s0 + s1;
//       if (s0 === "*" && s1 === "*") c = 15;
//       else if (s0 === "*" && s1 !== "*") {
//         c = s1 <= "6" ? 2 : 1;
//       } else if (s0 !== "*" && s1 === "*") {
//         if (s0 === "1") c = 9;
//         else if (s0 === "2") c = 6;
//         else c = 0;
//       } else if (two <= "26") c = 1;
//       else c = 0;
//       dp2 += dp0 * c;
//     }
//     dp2 %= mod;
//     [dp0, dp1] = [dp1, dp2];
//   }
//   return dp2;
// };

let s = "*";
Output: 9;

// s = "1*";
Output: 18;

s = "**";
Output: 96;

// s = "*1";
Output: 11;

// s = "*1*1*0";
output: 404;

// s = "*********";
output: 291868912;

// s = "3*";
output: 9;

// s = "1*";
console.log(numDecodings(s));
