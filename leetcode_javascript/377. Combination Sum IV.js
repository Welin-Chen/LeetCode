/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function (nums, target) {
  let count = 0;
  let dp = new Map();

  function dfs(target) {
    // base case
    if (target === 0) return 1;
    if (dp.has(target)) return dp.get(target);

    // recursion
    count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= target) count += dfs(target - nums[i]);
    }
    dp.set(target, count);
    return count;
  }
  dfs(target);
  console.log(dp);
  return count;
};

let nums = [1, 2, 3],
  target = 4;
Output: 7;

// nums = [4, 2, 1];
// target = 32;

nums = [1, 2, 3];
target = 32;
// nums = [9];
// target = 3;

// nums = [
//   3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25,
// ];
// target = 10;
// nums = [
//   10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
//   180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320,
//   330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470,
//   480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620,
//   630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770,
//   780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920,
//   930, 940, 950, 960, 970, 980, 990, 111,
// ];
// target = 999;
console.log(combinationSum4(nums, target));
