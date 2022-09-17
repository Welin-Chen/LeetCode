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

var minDepth = function (root) {
  if (!root) return 0;
  let l = minDepth(root.left);
  let r = minDepth(root.right);
  return l === 0 || r === 0 ? 1 + l + r : 1 + Math.min(l, r);
};

// var minDepth = function (root) {
//   if (!root) return 0;
//   else if (!root.left) return 1 + minDepth(root.right);
//   else if (!root.right) return 1 + minDepth(root.left);
//   return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// };

// var minDepth = function (root) {
//   if (!root) return 0;
//   let queue = [{ n: root, h: 1 }];

//   while (queue.length) {
//     let crt = queue.shift();
//     if (!crt.n.left && !crt.n.right) return crt.h;

//     if (crt.n.left) queue.push({ n: crt.n.left, h: crt.h + 1 });
//     if (crt.n.right) queue.push({ n: crt.n.right, h: crt.h + 1 });
//   }
// };

let root = [3, 9, 20, null, null, 15, 7];
Output: 2;
root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(minDepth(root));

root = [2, null, 3, null, 4, null, 5, null, 6];
output: 5;

root = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
root.right.right.right.right = new TreeNode(6);

console.log(minDepth(root));
