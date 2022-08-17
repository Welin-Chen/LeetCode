var jump = function (nums) {
  let n = nums.length;
  let oldMax = 0;
  let newMax = 0;
  let cnt = 0;

  for (let i = 0; i < n - 1; i++) {
    newMax = Math.max(nums[i] + i, newMax);

    if (i === oldMax) {
      cnt++;
      oldMax = newMax;
    }
  }
  return cnt;
};

let nums = [2, 3, 1, 1, 4];
Output: 2;
console.log(jump(nums));

nums = [2, 3, 0, 1, 4];
Output: 2;
console.log(jump(nums));
