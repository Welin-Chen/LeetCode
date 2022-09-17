/**
 * // Definition for a Node.
 * function Node(val,children) {
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

// 1.recurse
// var postorder = function (root) {
//   let res = [];
//   return dfs(root);

//   function dfs(root) {
//     if (!root) return res;

//     if (root.children) {
//       for (let i = 0; i < root.children.length; i++) {
//         dfs(root.children[i]);
//       }
//     }
//     res.push(root.val);
//     return res;
//   }
// };

// 2.stack
var postorder = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let n = stack.pop();
    res.push(n.val);
    if (n.children) {
      for (let i = 0; i < n.children.length; i++) {
        stack.push(n.children[i]);
      }
    }
  }
  return res.reverse();
};

let root = [1, null, 3, 2, 4, null, 5, 6];
Output: [5, 6, 3, 2, 4, 1];
root = new Node(1);
root.children = [3, 2, 4].map((el) => new Node(el));
root.children[0].children = [5, 6].map((el) => new Node(el));
console.log(root);

console.log(postorder(root));
