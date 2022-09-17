class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isValidBST = function (root) {
  return dfs(root, -Infinity, Infinity);

  function dfs(root, min, max) {
    if (!root) return true;

    let v = root.val;
    if (v >= max || v <= min) return false;

    return dfs(root.left, min, v) && dfs(root.right, v, max);
  }
};

let root = [5, 1, 4, null, null, 3, 6];
root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root));
Input: root = [5, 1, 4, null, null, 3, 6];
Output: false;
