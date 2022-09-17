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
 * @return {number[][]}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let size = queue.length;
    let arr = [];
    while (size--) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(arr);
  }
  return result;
};

let root = [3, 9, 20, null, null, 15, 7];
// Output: [[3],[9,20],[15,7]]

root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// let root = [1]
// Output: [[1]]

// let root = []
// Output: []

console.log(levelOrder());
