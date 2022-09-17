// var rob = function (nums) {
//   let n = nums.length;
//   if (n === 1) return nums[0];
//   if (n === 2) return Math.max(nums[0], nums[1]);
//   if (n === 3) return Math.max(...nums);
//   let dp = new Array(n + 1).fill(0);

//   let nums0 = nums;
//   let n0 = n;

//   //   case1: consider last element
//   nums = nums.slice(1, n0);
//   n = nums.length;
//   dp[0] = nums[0];
//   dp[1] = nums[1];
//   dp[2] = dp[0] + nums[2];
//   for (let i = 3; i <= n; i++) {
//     dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
//   }
//   let res1 = Math.max(dp[n - 1], dp[n - 2]);

//   // case2 consider 1st element
//   nums = nums0.slice(0, n0 - 1);
//   n = nums.length;
//   dp[0] = nums[0];
//   dp[1] = nums[1];
//   dp[2] = nums[0] + nums[2];
//   for (let i = 3; i < n; i++) {
//     dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
//   }
//   let res2 = Math.max(dp[n - 1], dp[n - 2]);

//   return Math.max(res1, res2);
// };

var rob = function (nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  if (n === 2 || n === 3) return Math.max(...nums);
  let dp = new Array(n + 1).fill(0);
  let n0 = n;

  function helper(nums, dp) {
    n = nums.length;
    dp[0] = nums[0];
    dp[1] = nums[1];
    dp[2] = dp[0] + nums[2];

    for (let i = 3; i < n; i++) {
      dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
    }
    return Math.max(dp[n - 1], dp[n - 2]);
  }

  // case 1:pick 1st element
  let r1 = helper(nums.slice(0, n0 - 1), dp);

  // case 2:pick last element
  let r2 = helper(nums.slice(1, n0), dp);

  return Math.max(r1, r2);
};

let nums = [2, 3, 2];
Output: 3;
// console.log(rob(nums));

nums = [1, 2, 3, 1];
Output: 4;
// console.log(rob(nums));

nums = [1, 2, 3];
Output: 3;
// console.log(rob(nums));

// nums = [200, 3, 140, 20, 10];
// output: 340;
// console.log(rob(nums));

// nums = [1, 2, 1, 1];
// output: 3;
// console.log(rob(nums));

// nums = [2, 7, 9, 3, 1];
// output: 11;
// console.log(rob(nums));

// nums = [6, 6, 4, 8, 4, 3, 3, 10];
// output: 27;
// console.log(rob(nums));

nums = [1, 2, 3, 1];
output: 4;
console.log(rob(nums));
