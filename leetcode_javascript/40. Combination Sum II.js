/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (candidates.length === 0) return [];
  candidates.sort((a, b) => a - b);
  let res = [];

  function dfs(arr, index, target) {
    // base case
    if (target === 0) return res.push([...arr]);
    if (target < 0) return;
    // recursion
    for (let i = index; i < candidates.length; i++) {
      let c = candidates[i];
      let c0 = candidates[i - 1];
      if (i !== index && c === c0) continue;
      arr.push(c);
      dfs(arr, i + 1, target - c);
      arr.pop();
    }
  }
  dfs([], 0, target);
  return res;
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
Output: [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
];
// (candidates = [2, 3, 6, 7]), (target = 7);

console.log(combinationSum2(candidates, target));
