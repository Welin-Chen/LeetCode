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
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
class CBTInserter {
  constructor(root) {
    this.arr = [null];
    this.bfs(root);
  }

  bfs(root) {
    let q = [root];
    while (q.length) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);

      this.arr.push(node);
    }
  }

  insert(val) {
    let index = Math.floor(this.arr.length / 2);
    let parent = this.arr[index];
    let node = new TreeNode(val);

    if (!parent.left) parent.left = node;
    else parent.right = node;

    this.arr.push(node);
    return parent.val;
  }

  get_root() {
    return this.arr[1];
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

let root = new TreeNode(1);
root.left = new TreeNode(2);
let cBTInserter = new CBTInserter(root);
console.log(cBTInserter.insert(3)); // return 1
console.log(cBTInserter.insert(4)); // return 2
console.log(cBTInserter.get_root()); // return [1, 2, 3, 4]
