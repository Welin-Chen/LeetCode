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
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var pruneTree = function (root) {
  if (!root) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (!root.left && !root.right && root.val === 0) return null;
  return root;
};

let root = [1, null, 0, 0, 1];
Output: [1, null, 0, null, 1];
root = new TreeNode(1);
root.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

root = [1, 0, 1, 0, 0, 0, 1];
output: [1, null, 1, null, 1];
root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
console.log(pruneTree(root));

root = [0, null, 0, 0, 0];
root = new TreeNode(0);
root.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(0);

console.log(pruneTree(root));
