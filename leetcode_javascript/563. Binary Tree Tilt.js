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
var findTilt = function (root) {
  let sum = 0;
  dfs(root);
  return sum;

  function dfs(root) {
    if (!root) return 0;
    let l = dfs(root.left);
    let r = dfs(root.right);
    sum += Math.abs(l - r);
    return root.val + l + r;
  }
};

let root = [1, 2, 3];
Output: 1;
root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root = [4, 2, 9, 3, 5, null, 7];
Output: 15;
root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(9);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log(findTilt(root));
