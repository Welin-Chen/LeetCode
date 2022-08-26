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
// var postorderTraversal = function (root) {
//   let res = [];
//   return dfs(root);

//   function dfs(root) {
//     if (!root) return res;
//     if (root.left) dfs(root.left);
//     if (root.right) dfs(root.right);
//     res.push(root.val);
//     return res;
//   }
// };

// 2.stack
var postorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let n = stack.pop();
    res.push(n.val);

    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  return res.reverse();
};

let root = [1, null, 2, 3];
Output: [3, 2, 1];
root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(postorderTraversal(root));

root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log(postorderTraversal(root));
