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

// 1.recurse
// function preorder(root) {
//   let res = [];
//   return dfs(root);

//   function dfs(root) {
//     if (!root) return res;
//     res.push(root.val);
//     if (root.children) {
//       for (let i = 0; i < root.children.length; i++) {
//         dfs(root.children[i]);
//       }
//     }
//     return res;
//   }
// }

// 2.stack
function preorder(root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);

  while (stack.length) {
    let n = stack.pop();
    res.push(n.val);
    if (n.children) {
      for (let i = n.children.length - 1; i >= 0; i--) {
        stack.push(n.children[i]);
      }
    }
  }
  return res;
}

let root = [1, null, 3, 2, 4, null, 5, 6];
// [1,3,5,6,2,4]

root = new Node(1);
root.children = [3, 2, 4].map((v) => new Node(v));
root.children[0].children = [5, 6].map((v) => new Node(v));
// console.log(root);

console.log(preorder(root));
