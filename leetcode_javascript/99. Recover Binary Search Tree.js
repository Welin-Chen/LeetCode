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
 * @return {void} Do not return anything, modify root in-place instead.
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var recoverTree = function (root) {
  let prev, first, second;

  dfs(root);
  let temp = first.val;
  first.val = second.val;
  second.val = temp;

  return root;

  function dfs(root) {
    if (!root) return;
    dfs(root.left);

    if (prev && prev.val > root.val) {
      if (!first) first = prev;
      second = root;
    }

    prev = root;
    dfs(root.right);
  }
};

let root = [1, 3, null, null, 2];
Output: [3, 1, null, null, 2];
root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

// console.log(recoverTree(root));

root = [3, 1, 4, null, null, 2];
output: [2, 1, 4, null, null, 3];
root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);
console.log(recoverTree(root));
