/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let max = Math.max(...nums);
  let dp = Array(max + 1).fill(0);
  let cnts = Array(max + 1).fill(0);

  for (let num of nums) cnts[num]++;

  dp[1] = cnts[1];

  for (let i = 2; i <= max; i++) {
    let points = i * cnts[i];
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + points);
  }
  return dp[max];
};

let nums = [3, 4, 2];
// dp[1]=0
// dp[2]=2
// dp[3]=max(2,3)=3
// dp[4]=max(4+2,3)=6
Output: 6;
console.log(deleteAndEarn(nums));

nums = [2, 2, 3, 3, 3, 4];
// dp[1]=0
// dp[2]=2*2=4
// dp[3]=max(3*3,4)=9
// dp[4]=max(4+4,9)=9
Output: 9;
console.log(deleteAndEarn(nums));
