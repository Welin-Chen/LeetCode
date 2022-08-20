var maxSubArray = function (nums) {
  let max = -Infinity;
  let res = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    res = Math.max(res, max);
  }
  return res;
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
