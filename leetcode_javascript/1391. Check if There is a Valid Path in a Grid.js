/**
 * @param {number[][]} grid
 * @return {boolean}
 */
// Street1 l , r
// Street2 t , b
// Street3 l , b
// Street4 r , b
// Street5 l , t
// Street6 t , r

// 1.
// var hasValidPath = function (grid) {
//   let m = grid.length;
//   let n = grid[0].length;
//   let res = false;
//   let visited = {};
//   let l = "l";
//   let r = "r";
//   let t = "t";
//   let b = "b";

//   if (grid[0][0] === 5 || grid[m - 1][n - 1] == 4) return false;

//   function helper(i, j, prev) {
//     let key = `${i},${j}`;
//     if (visited[key] !== undefined) return res;
//     if (i < 0 || j < 0 || i >= m || j >= n) return false;

//     visited[key] = true;

//     let s = grid[i][j];
//     if (s === 1 && (prev === t || prev === b)) return false;
//     if (s === 2 && (prev === l || prev === r)) return false;
//     if (s === 3 && (prev === t || prev === r)) return false;
//     if (s === 4 && (prev === t || prev === l)) return false;
//     if (s === 5 && (prev === b || prev === r)) return false;
//     if (s === 6 && (prev === b || prev === l)) return false;
//     if (i === m - 1 && j === n - 1) return true;

//     if (s === 1) res = res || helper(i, j + 1, l) || helper(i, j - 1, r);
//     if (s === 2) res = res || helper(i + 1, j, t) || helper(i - 1, j, b);
//     if (s === 3) res = res || helper(i, j - 1, r) || helper(i + 1, j, t);
//     if (s === 4) res = res || helper(i, j + 1, l) || helper(i + 1, j, t);
//     if (s === 5) res = res || helper(i, j - 1, r) || helper(i - 1, j, b);
//     if (s === 6) res = res || helper(i, j + 1, l) || helper(i - 1, j, b);
//     return res;
//   }
//   return helper(0, 0, "");
// };

// 2.
// Street1 l , r
// Street2 t , b
// Street3 l , b
// Street4 r , b
// Street5 l , t
// Street6 t , r
var hasValidPath = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  if (grid[0][0] === 5 || grid[m - 1][n - 1] === 4) return false;

  let street = {
    1: ["l", "r"],
    2: ["u", "d"],
    3: ["d", "l"],
    4: ["d", "r"],
    5: ["u", "l"],
    6: ["u", "r"],
  };

  let dirs = {
    l: [0, -1, "r"],
    r: [0, 1, "l"],
    u: [-1, 0, "d"],
    d: [1, 0, "u"],
  };

  let visited = {};
  let queue = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    let [i, j] = queue.shift();
    if (i === m - 1 && j === n - 1) return true;
    for (let k = 0; k < street[grid[i][j]].length; k++) {
      let dir = street[grid[i][j]][k];
      let [di, dj, dir_from] = dirs[dir];
      let i1 = i + di;
      let j1 = j + dj;

      if (i1 < 0 || j1 < 0 || i1 >= m || j1 >= n) continue;
      if (street[grid[i1][j1]].includes(dir_from)) {
        let key = `${i1},${j1}`;
        if (visited[key] !== undefined) continue;
        visited[key] = true;
        queue.push([i1, j1]);
      }
    }
  }
  return false;
};

let grid = [
  [2, 4, 3],
  [6, 5, 2],
];
Output: true;

// grid = [
//   [1, 2, 1],
//   [1, 2, 1],
// ];
// Output: false;

// grid = [[1, 1, 2]];
// output: false;

// grid = [
//   [4, 3, 3],
//   [6, 5, 2],
// ];
output: false;
console.log(hasValidPath(grid));
