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
// var preorderTraversal = function (root) {
//   let res = [];
//   return dfs(root);

//   function dfs(root) {
//     if (!root) return res;
//     res.push(root.val);
//     dfs(root.left);
//     dfs(root.right);
//     return res;
//   }
// };

// 2.stack
var preorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let n = stack.pop();
    res.push(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  return res;
};

let root = [1, null, 2, 3];
Output: [1, 2, 3];
root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

root = new TreeNode();
console.log(preorderTraversal(root));
