class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var binaryTreePaths = function (root) {
  let res = [];
  dfs(root, "");
  return res;

  function dfs(root, s) {
    if (!root) return;

    s += root.val;
    if (root.left) dfs(root.left, s + "->");
    if (root.right) dfs(root.right, s + "->");
    if (!root.left && !root.right) res.push(s);
  }
};

let root = [1, 2, 3, null, 5];
root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

console.log(binaryTreePaths(root));
