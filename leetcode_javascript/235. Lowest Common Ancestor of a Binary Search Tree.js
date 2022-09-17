/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
var lowestCommonAncestor = function (root, p, q) {
  let l = p.val,
    r = q.val,
    m = root.val;
  if (m > l && m > r) return lowestCommonAncestor(root.left, p, q);
  if (m < l && m < r) return lowestCommonAncestor(root.right, p, q);
  return root;
};

// var lowestCommonAncestor = function (root, p, q) {
//   if (p.val < root.val && q.val < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   if (p.val > root.val && q.val > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   return root;
// };

let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 4;
Output: 6;
p = new TreeNode(p);
q = new TreeNode(q);
root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(root, p, q));

Input: (root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), (p = 2), (q = 4);
Output: 2;

Input: (root = [2, 1]), (p = 2), (q = 1);
