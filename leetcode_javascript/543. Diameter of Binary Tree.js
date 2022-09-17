/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var diameterOfBinaryTree = function (root) {
  let d = 0;
  dfs(root);
  return d;

  function dfs(root) {
    if (!root) return 0;
    let l = dfs(root.left);
    let r = dfs(root.right);
    d = Math.max(d, l + r);
    return 1 + Math.max(l, r);
  }
};

let root = [1, 2, 3, 4, 5];
Output: 3;
root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));
