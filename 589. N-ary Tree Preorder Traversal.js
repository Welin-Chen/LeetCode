/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

function preorder(root) {
  let result = [];
  function helper(root) {
    if (!root) return result;
    result.push(root.val);
    root.children?.forEach((el) => helper(el));
    return result;
  }
  return helper(root);
}

let root = [1, null, 3, 2, 4, null, 5, 6];
// [1,3,5,6,2,4]

root = new Node(1);
root.children = [3, 2, 4].map((v) => new Node(v));
root.children[0].children = [5, 6].map((v) => new Node(v));
console.log(root);

console.log(preorder(root));
