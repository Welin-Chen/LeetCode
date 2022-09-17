/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let sum = 0;
  for (let i = 0; i < 32; i++) {
    let ones = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] & 1) ones++;
      nums[j] >>>= 1;
    }
    let zeros = nums.length - ones;
    sum += ones * zeros;
  }
  return sum;
};

let nums = [4, 14, 2];
Output: 6;

console.log(totalHammingDistance(nums));
