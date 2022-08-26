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
 * @return {number[]}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// 1.recurse
// var inorderTraversal = function (root) {
//   let res = [];
//   return dfs(root);

//   function dfs(root) {
//     if (!root) return res;

//     if (root.left) dfs(root.left);
//     res.push(root.val);
//     if (root.right) dfs(root.right);
//     return res;
//   }
// };

// 2.stack
var inorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      n = stack.pop();
      res.push(n.val);
      root = n.right;
    }
  }
  return res;
};

let root = [1, null, 2, 3];
Output: [1, 3, 2];
root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(inorderTraversal(root));

root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log(inorderTraversal(root));
