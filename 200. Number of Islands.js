/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let R = grid.length,
    C = grid[0].length;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= R || j >= C || grid[i][j] !== "1") return;
    grid[i][j] = "v";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  return count;
};

// Example 1:

Input: grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
// Output: 1;
// Example 2:

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// Output: 3;
console.log(numIslands(grid));
