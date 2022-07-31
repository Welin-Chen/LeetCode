/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   let res = [];
//   let n = nums.length;
//   let hash = {};
//   for (let i of nums) hash[i] = (hash[i] || 0) + 1;

//   function dfs(arr) {
//     // base case
//     if (arr.length === n) return res.push([...arr]);
//     // recursion
//     for (let i = 0; i < n; i++) {
//       let c = nums[i];
//       if (hash[c]) {
//         hash[c]--;
//         dfs([...arr, c]);
//         hash[c]++;
//       }
//     }
//   }
//   dfs([]);
//   return res;
// };

var permute = function (nums) {
  let res = [];
  let n = nums.length;

  function dfs(arr, rest) {
    // base case
    if (arr.length === n) return res.push([...arr]);
    // recursion
    for (let i = 0; i < rest.length; i++) {
      dfs([...arr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  dfs([], nums);
  return res;
};

let nums = [1, 2, 3];
Output: [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
console.log(permute(nums));
