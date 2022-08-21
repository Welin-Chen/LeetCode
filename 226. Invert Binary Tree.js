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
var invertTree = function (root) {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

let root = [4, 2, 7, 1, 3, 6, 9];
Output: [4, 7, 2, 9, 6, 3, 1];
root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root));
