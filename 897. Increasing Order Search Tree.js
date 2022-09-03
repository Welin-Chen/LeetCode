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

var increasingBST = function (root) {
  let node = new TreeNode();
  let newRoot = node;
  dfs(root);
  return newRoot.right;

  function dfs(root) {
    if (!root) return;

    dfs(root.left);
    node.right = new TreeNode(root.val);
    node = node.right;
    dfs(root.right);
  }
};

let root = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);
root.left.left.left = new TreeNode(1);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);

console.log(increasingBST(root));
