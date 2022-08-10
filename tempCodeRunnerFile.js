var countTexts = function (pressedKeys) {
  let mod = 1e9 + 7;
  let n = pressedKeys.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  let prev = "";
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    let cur = pressedKeys[i - 1];

    if (cur !== prev) cnt = 0;
    prev = cur;
    cnt++;

    dp[i] += dp[i - 1];
    if (cnt >= 2 && i >= 2) dp[i] += dp[i - 2];
    if (cnt >= 3 && i >= 3) dp[i] += dp[i - 3];
    if (cur === "7" || cur === "9") {
      if (cnt >= 4 && i >= 4) dp[i] += dp[i - 4];
    }
    dp[i] = dp[i] % mod;
  }

  return dp[n];
};