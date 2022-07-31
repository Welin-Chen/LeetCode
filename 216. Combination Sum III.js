/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// var combinationSum3 = function (k, n) {
//   let res = [];
//   let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   function dfs(arr, index, n) {
//     // base case
//     if (arr.length > k || n < 0) return;
//     if (arr.length === k && n === 0) return res.push([...arr]);
//     // recursion
//     for (let i = index; i < digits.length; i++) {
//       arr.push(digits[i]);
//       dfs(arr, i + 1, n - digits[i]);
//       arr.pop();
//     }
//   }
//   dfs([], 0, n);
//   return res;
// };

var combinationSum3 = function (k, n) {
  let res = [];
  function dfs(arr, index, n) {
    // base case
    if (n < 0 || arr.length > k) return;
    if (n === 0 && arr.length === k) return res.push([...arr]);
    // recursion
    for (let i = index; i <= 9; i++) {
      dfs([...arr, i], i + 1, n - i);
    }
  }
  dfs([], 1, n);
  return res;
};

let k = 3,
  n = 7;
Output: [[1, 2, 4]];

k = 3;
n = 9;
Output: [
  [1, 2, 6],
  [1, 3, 5],
  [2, 3, 4],
];
// k = 4;
// n = 1;
Output: [];
console.log(combinationSum3(k, n));
