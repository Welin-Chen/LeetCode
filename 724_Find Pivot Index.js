/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function (nums) {
//   let left, right;
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) left = 0;
//     else {
//       left = 0;
//       for (let j = 0; j < i; j++) left += nums[j];
//     }
//     if (i === nums.length - 1) right = 0;
//     else {
//       right = 0;
//       for (let j = i + 1; j < nums.length; j++) right += nums[j];
//     }
//     if (left === right) return i;
//   }
//   return -1;
// };

var pivotIndex = function (nums) {
  let sum = nums.reduce((a, c, i, nums) => (a += nums[i]));
  let left = 0,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    right = sum - left - nums[i];
    if (left === right) return i;
    left += nums[i];
  }
  return -1;
};

// let nums = [1, 7, 3, 6, 5, 6]; //3
// let nums = [1, 2, 3]; //-1
let nums = [2, 1, -1]; //0
console.log(pivotIndex(nums));
