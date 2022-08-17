var maxSubarraySumCircular = function (nums) {
  let [max, maxSum] = [-Infinity, -Infinity];
  let [min, minSum] = [Infinity, Infinity];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    sum += n;

    maxSum = Math.max(maxSum + n, n);
    max = Math.max(max, maxSum);

    minSum = Math.min(minSum + n, n);
    min = Math.min(min, minSum);
  }
  return max > 0 ? Math.max(max, sum - min) : max;
};

let nums = [1, -2, 3, -2];
Output: 3;
// console.log(maxSubarraySumCircular(nums));

nums = [5, -3, 5];
Output: 10;
// console.log(maxSubarraySumCircular(nums));

nums = [-3, -2, -3];
Output: -2;
console.log(maxSubarraySumCircular(nums));
