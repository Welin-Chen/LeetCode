/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let n = nums.length;
//   let end = n - 1;

//   for (let i = n - 1; i >= 0; i--) {
//     let next = i + nums[i];
//     if (next >= end) end = i;
//   }
//   return end === 0;
// };

var canJump = function (nums) {
  let n = nums.length;
  let next = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= next) next = i;
  }
  return next === 0;
};

let nums = [2, 3, 1, 1, 4];
Output: true;
console.log(canJump(nums));

nums = [3, 2, 1, 0, 4];
Output: false;
console.log(canJump(nums));
