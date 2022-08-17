/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let n = nums.length;
//   let sum = 0;
//   let max = -Infinity;

//   for (let i = 0; i < n; i++) {
//     sum = Math.max(sum + nums[i], nums[i]);
//     max = Math.max(max, sum);
//   }
//   return max;
// };

var maxSubArray = function (nums) {
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
  }
  return Math.max(...nums);
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
Output: 6;
console.log(maxSubArray(nums));

nums = [1];
Output: 1;
console.log(maxSubArray(nums));

nums = [5, 4, -1, 7, 8];
Output: 23;
console.log(maxSubArray(nums));
