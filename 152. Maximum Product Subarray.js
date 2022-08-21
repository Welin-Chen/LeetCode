var maxProduct = function (nums) {
  let max = 1;
  let min = 1;
  let res = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    [max, min] = [Math.max(n, n * max, n * min), Math.min(n, n * max, n * min)];
    res = Math.max(res, max);
  }
  return res;
};

let nums = [2, 3, -2, 4];
Output: 6;
console.log(maxProduct(nums));

nums = [-2, 0, -1];
Output: 0;
console.log(maxProduct(nums));

nums = [-2, 3, -4];
output: 24;
console.log(maxProduct(nums));

nums = [7, -2, -4];
output: 56;
console.log(maxProduct(nums));

nums = [2, -5, -2, -4, 3];
output: 24;
console.log(maxProduct(nums));
