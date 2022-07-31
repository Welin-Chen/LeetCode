/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort();
  let res = [];
  let hash = {};

  for (let i of nums) hash[i] = (hash[i] || 0) + 1;

  function backtrack(arr, index) {
    // base case
    if (arr.length === nums.length) return res.push([...arr]);
    // recursion
    for (let i = 0; i < nums.length; i++) {
      let c = nums[i];
      if (nums[i] !== nums[i - 1]) {
        if (hash[c]) {
          hash[c]--;
          backtrack([...arr, c], i, nums);
          hash[c]++;
        }
      }
    }
    return res;
  }
  return backtrack([], 0);
};

// 法二
// var permuteUnique = function (nums) {
//   nums = nums.sort();
//   let res = [];
//   let map = new Map();

//   for (let i of nums) {
//     if (map.has(i)) map.set(i, map.get(i) + 1);
//     else map.set(i, 1);
//   }

//   function dfs(arr, index) {
//     // base case
//     if (arr.length === nums.length) return res.push([...arr]);

//     // recursion
//     for (let i = 0; i < nums.length; i++) {
//       let c0 = nums[i - 1];
//       let c = nums[i];
//       let v = map.get(c);
//       if (v) {
//         map.set(c, --v);
//         if (c !== c0) dfs([...arr, c], i, nums);
//         map.set(c, ++v);
//       }
//     }
//   }
//   dfs([], 0);
//   return res;
// };

let nums = [1, 1, 2];
Output: [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
];
nums = [1, 2, 3];
Output: [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
nums = [3, 3, 0, 3];
Output: [
  [0, 3, 3, 3],
  [3, 0, 3, 3],
  [3, 3, 0, 3],
  [3, 3, 3, 0],
];
console.log(permuteUnique(nums));
