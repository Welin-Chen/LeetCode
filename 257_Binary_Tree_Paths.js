class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var binaryTreePaths = function (root) {
  let result = [];

  function dfs(root, str) {
    if (!root) return;
    str += root.val;
    if (!root.left && !root.right) result.push(str);
    if (root.left) dfs(root.left, str + "->");
    if (root.right) dfs(root.right, str + "->");
    return;
  }

  dfs(root, "");
  return result;
};

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (val === null) return this;
    let newNode = new TreeNode(val);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (current) {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else if (current.right === null) {
          current.right = newNode;
          break;
        } else current = current.left;
      }
    }
    return this;
  }
}

let root = [1, 2, 3, null, 5];
// let root = [];
let binaryTree = new BinaryTree();
for (let i = 0; i < root.length; i++) binaryTree.insert(root[i]);

console.log(binaryTreePaths(binaryTree.root));
