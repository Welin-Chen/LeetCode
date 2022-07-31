/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function dfs(arr, i, target) {
    // base case
    if (target === 0) return res.push([...arr]);
    if (target < 0) return;
    // recursion
    for (let j = i; j < candidates.length; j++) {
      arr.push(candidates[j]);
      dfs(arr, j, target - candidates[j]);
      arr.pop();
    }
  }
  dfs([], 0, target);
  return res;
};

let candidates = [2, 3, 6, 7],
  target = 7;
Output: [[2, 2, 3], [7]];

console.log(combinationSum(candidates, target));
