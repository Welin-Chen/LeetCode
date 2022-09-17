/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  else if (p === null || q === null || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// var isSameTree = function (p, q) {
//   return JSON.stringify(p) === JSON.stringify(q);
// };

let p = [1, 2, 3],
  q = [1, 2, 3];
Output: true;

p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
console.log(isSameTree(p, q));

// (p = [1, 2]), (q = [1, null, 2]);
// Output: false;

p = new TreeNode(1);
p.left = new TreeNode(2);

q = new TreeNode(1);
q.right = new TreeNode(2);
console.log(isSameTree(p, q));

// (p = [1, 2, 1]), (q = [1, 1, 2]);
// Output: false;

p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);

q = new TreeNode(1);
q.left = new TreeNode(1);
q.right = new TreeNode(2);

// console.log(JSON.stringify(p));
// console.log(JSON.stringify(q));

console.log(isSameTree(p, q));
