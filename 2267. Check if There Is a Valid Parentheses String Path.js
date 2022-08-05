/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = {};

  if ((m + n - 1) % 2 !== 0) return false;
  if (grid[0][0] !== "(" || grid[m - 1][n - 1] !== ")") return false;

  function helper(i, j, bal) {
    if (i >= m || j >= n) return false;
    if (bal > m + n - i - j) return false;

    if (grid[i][j] === "(") bal++;
    else bal--;
    if (bal < 0) return false;
    if (i === m - 1 && j === n - 1) return bal === 0;

    let key = `${i},${j},${bal}`;
    if (visited[key] !== undefined) return visited[key];
    return (visited[key] = helper(i + 1, j, bal) || helper(i, j + 1, bal));
  }
  return helper(0, 0, 0);
};

let grid = [
  ["(", "(", "("],
  [")", "(", ")"],
  ["(", "(", ")"],
  ["(", "(", ")"],
];
Output: true;

// grid = [
//   [")", ")"],
//   ["(", "("],
// ];
Output: false;

s = [
  ["(", "(", "("],
  [")", "(", ")"],
  ["(", "(", ")"],
  ["(", "(", ")"],
];
console.log(hasValidPath(grid));
