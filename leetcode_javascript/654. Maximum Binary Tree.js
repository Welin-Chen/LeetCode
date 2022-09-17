class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var constructMaximumBinaryTree = function (nums) {
  let n = nums.length;
  if (n === 0) return null;

  let root = new TreeNode(Math.max(...nums));
  let i = nums.indexOf(root.val);

  root.left = constructMaximumBinaryTree(nums.slice(0, i));
  root.right = constructMaximumBinaryTree(nums.slice(i + 1, n));

  return root;
};

nums = [3, 2, 1, 6, 0, 5];
Output: [6, 3, 5, null, 2, 0, null, null, 1];
console.log(constructMaximumBinaryTree(nums));
