class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isValidBST = function (root) {
  function helper(root, min, max) {
    if (!root) return true;
    if (root.val >= max || root.val <= min) return false;
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }
  return helper(root, -Infinity, Infinity);
};

// let root = [2, 1, 3];
// root = new TreeNode(2);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);
// console.log(isValidBST(root));

// Input: root = [2, 1, 3];
// Output: true;

let root = [5, 1, 4, null, null, 3, 6];
root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root));
Input: root = [5, 1, 4, null, null, 3, 6];
Output: false;
