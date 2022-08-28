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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isSubtree = function (root, subRoot) {
  return dfs(root, subRoot);

  function dfs(n) {
    if (!n) return false;
    if (isSame(n, subRoot)) return true;
    return dfs(n.left) || dfs(n.right);
  }

  function isSame(n1, n2) {
    if (!n1 && !n2) return true;
    else if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
  }
};

let root = [3, 4, 5, 1, 2],
  subRoot = [4, 1, 2];
root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);

console.log(isSubtree(root, subRoot));
