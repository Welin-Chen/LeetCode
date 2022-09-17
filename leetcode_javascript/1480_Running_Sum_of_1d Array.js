/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function (nums) {
//   let sums = [];
//   sums[0] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     sums[i] = nums[i] + sums[i - 1];
//   }
//   return sums;
// };

var runningSum = function (nums) {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

// let nums = [1, 2, 3, 4];
// let nums = [1, 1, 1, 1, 1];
let nums = [3, 1, 2, 10, 1];
console.log(runningSum(nums));
