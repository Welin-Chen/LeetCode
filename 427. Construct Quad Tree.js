/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */

class Node {
  constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }
}

var construct = function (grid) {
  let n = grid.length;
  return dfs([0, n, 0, n]);

  function dfs(matrix) {
    let [r0, rn, c0, cn] = matrix;
    if (rn - r0 === 1) return new Node(grid[r0][c0], true);

    let { tl, tr, bl, br } = split(matrix);
    let [TL, TR, BL, BR] = [dfs(tl), dfs(tr), dfs(bl), dfs(br)];

    if (TL.isLeaf && TR.isLeaf && BL.isLeaf && BR.isLeaf) {
      if (TL.val === TR.val && TR.val === BL.val && BL.val === BR.val) {
        return new Node(TL.val, true);
      }
    }
    return new Node(false, false, TL, TR, BL, BR);
  }

  function split(matrix) {
    let [r0, rn, c0, cn] = matrix;
    let midR = (r0 + rn) / 2;
    let midC = (c0 + cn) / 2;

    let tl = [r0, midR, c0, midC];
    let tr = [r0, midR, midC, cn];
    let bl = [midR, rn, c0, midC];
    let br = [midR, rn, midC, cn];

    return { tl, tr, bl, br };
  }
};

let grid = [
  [0, 1],
  [1, 0],
];
Output: [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, 1],
  [1, 0],
];

console.log(construct(grid));
