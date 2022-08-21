class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var printTree = function (root) {
  let rows = getH(root);
  let cols = 2 ** rows - 1;
  let res = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) row.push("");
    res.push(row);
  }

  function getH(root) {
    if (!root) return 0;
    return 1 + Math.max(getH(root.left), getH(root.right));
  }

  function dfs(root, d, l, r, res) {
    if (!root || l > r) return;

    let mid = (l + r) / 2;
    res[d][mid] = root.val + "";

    dfs(root.left, d + 1, l, mid - 1, res);
    dfs(root.right, d + 1, mid + 1, r, res);
  }

  dfs(root, 0, 0, cols - 1, res);
  return res;
};

let root = [1, 2];
Output: [
  ["", "1", ""],
  ["2", "", ""],
];
root = new TreeNode(1);
root.left = new TreeNode(2);
// console.log(printTree(root));

root = [1, 2, 3, null, 4];
Output: [
  ["", "", "", "1", "", "", ""],
  ["", "2", "", "", "", "3", ""],
  ["", "", "4", "", "", "", ""],
];

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);

console.log(printTree(root));
