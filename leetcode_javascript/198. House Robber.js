/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  let dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  dp[2] = dp[0] + nums[2];

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
  }
  return Math.max(dp[n - 1], dp[n - 2]);
};

let nums = [1, 2, 3, 1];
Output: 4;
console.log(rob(nums));

nums = [2, 7, 9, 3, 1];
Output: 12;
console.log(rob(nums));

nums = [2, 1, 1, 2];
Output: 4;
console.log(rob(nums));

nums = [0];
Output: 0;
console.log(rob(nums));
