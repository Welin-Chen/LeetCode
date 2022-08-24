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
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// var isUnivalTree = function (root) {
//   if (!root) return true;
//   if (root.left && root.left.val !== root.val) return false;
//   if (root.right && root.right.val !== root.val) return false;

//   return isUnivalTree(root.left) && isUnivalTree(root.right);
// };

var isUnivalTree = function (root) {
  let v = root.val;
  let q = [];
  q.push(root);

  while (q.length) {
    let node = q.shift();

    if (node.val !== v) return false;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return true;
};

let root = [1, 1, 1, 1, 1, null, 1];
Output: true;
root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(1);

console.log(isUnivalTree(root));
