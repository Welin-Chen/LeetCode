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

// var isSymmetric = function (root) {
//   if (root === null) return true;

//   function helper(l, r) {
//     if (l === null && r === null) return true;
//     else if (l === null || r === null || l.val !== r.val) return false;

//     return helper(l.left, r.right) && helper(l.right, r.left);
//   }
//   return helper(root.left, root.right);
// };

var isSymmetric = function (root) {
  if (!root) return true;

  function helper(l, r) {
    if (!l && !r) return true;
    else if (!l || !r || l.val !== r.val) return false;

    return helper(l.left, r.right) && helper(l.right, r.left);
  }
  return helper(root.left, root.right);
};

let root = [1, 2, 2, 3, 4, 4, 3];
Output: true;

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);

root.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);
// console.log(root);
console.log(isSymmetric(root));

root = [1, 2, 2, null, 3, null, 3];
Output: false;

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);

root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
console.log(isSymmetric(root));
