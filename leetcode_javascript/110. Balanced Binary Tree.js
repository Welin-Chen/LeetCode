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
 * @return {boolean}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isBalanced = function (root) {
  return dfs(root) !== Infinity;

  function dfs(root) {
    if (!root) return 0;
    let l = dfs(root.left);
    let r = dfs(root.right);

    if (Math.abs(l - r) > 1) return Infinity;
    return 1 + Math.max(l, r);
  }
};

let root = [3, 9, 20, null, null, 15, 7];
Output: true;
root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root));

root = [1, 2, 2, 3, 3, null, null, 4, 4];
root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);

console.log(isBalanced(root));

root = [1];
root = new TreeNode(1);
// console.log(isBalanced(root));

root = [3, 9, 20, null, null, 15, 7];
root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(isBalanced(root));
