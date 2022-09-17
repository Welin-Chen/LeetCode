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
var minCameraCover = function (root) {
  let n = 0;
  return dfs(root) === "child" ? n + 1 : n;

  function dfs(root) {
    if (!root) return null;

    let l = dfs(root.left);
    let r = dfs(root.right);

    if (!l && !r) return "child";
    if (l === "child" || r === "child") {
      n++;
      return "camera";
    }
    if (l === "camera" || r === "camera") return null;
  }
};

let root = [0, 0, null, 0, 0];
Output: 1;
root = new TreeNode(0);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);

root = [0, 0, null, 0, null, 0, null, null, 0];
Output: 2;
root = new TreeNode(0);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.left.left = new TreeNode(0);
root.left.left.left.right = new TreeNode(0);
// console.log(minCameraCover(root));

[0, null, 0, null, 0, null, 0];
Output: 2;
root = new TreeNode(0);
root.right = new TreeNode(0);
root.right.right = new TreeNode(0);
root.right.right.right = new TreeNode(0);

console.log(minCameraCover(root));
