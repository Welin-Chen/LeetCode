var getMaxLen = function (nums) {
  let [max, pos, neg] = [0, 0, 0];

  for (let n of nums) {
    if (n > 0) {
      pos++;
      neg = neg === 0 ? 0 : neg + 1;
    } else if (n < 0) {
      let temp = pos;
      pos = neg === 0 ? 0 : neg + 1;
      neg = temp + 1;
    } else {
      [pos, neg] = [0, 0];
    }
    max = Math.max(max, pos);
  }
  return max;
};

let nums = [1, -2, -3, 4];
Output: 4;
console.log(getMaxLen(nums));
