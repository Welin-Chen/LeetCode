var maxProduct = function (nums) {
  let [max, min] = [1, 1];
  let res = -Infinity;

  for (let n of nums) {
    let maxP = n * max;
    let minP = n * min;
    max = Math.max(n, maxP, minP);
    min = Math.min(n, maxP, minP);
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
