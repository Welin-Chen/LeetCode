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
var isEvenOddTree = function (root) {
  let level = 0;
  let q = [];
  q.push(root);

  while (q.length) {
    let l = q.length;
    let v0 = null;

    for (let i = 0; i < l; i++) {
      let n = q.shift();
      let v = n.val;
      if (level % 2 === 0) {
        if (v % 2 === 0) return false;
        else if (v0 && v0 >= v) return false;
      } else {
        if (v % 2 === 1) return false;
        else if (v0 && v0 <= v) return false;
      }
      v0 = v;

      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    level++;
  }
  return true;
};

let root = [1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2];
Output: true;
root = new TreeNode(1);
root.left = new TreeNode(10);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.left.left = new TreeNode(12);
root.left.left.right = new TreeNode(8);
root.right.left.left = new TreeNode(6);
root.right.right.right = new TreeNode(2);

console.log(isEvenOddTree(root));
// 偶數遞增node.val>prev，奇數遞減node.val<prev
