/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  function dfs(arr, index) {
    // base case
    if (arr.length === k) return res.push([...arr]);
    // recursion
    for (let i = index; i <= n; i++) {
      dfs([...arr, i], i + 1);
    }
  }
  dfs([], 1);
  return res;
};

let n = 4,
  k = 2;
Output: [
  [2, 4],
  [3, 4],
  [2, 3],
  [1, 2],
  [1, 3],
  [1, 4],
];
console.log(combine(n, k));
