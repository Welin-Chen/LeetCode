/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var inorderTraversal = function (root) {
  let result = [];

  function traverse(root) {
    if (!root) return;
    if (root.left) traverse(root.left);
    result.push(root.val);
    if (root.right) traverse(root.right);
  }

  traverse(root);
  return result;
};

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

let root = [1, null, 2, 3];
let binaryTree = new BinaryTree();
binaryTree.root = new TreeNode(1);
binaryTree.root.right = new TreeNode(2);
binaryTree.root.right.left = new TreeNode(3);
console.log(inorderTraversal(binaryTree.root));
