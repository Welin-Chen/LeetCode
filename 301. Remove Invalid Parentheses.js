/**
 * @param {string} s
 * @return {string[]}
 */
// 1.dfs
var removeInvalidParentheses = function (s) {
  let res = [];
  let l = 0,
    r = 0;

  for (let i of s) {
    if (i === "(") l++;
    if (i === ")") l === 0 ? r++ : l--;
  }

  function dfs(s, start, l, r, res) {
    if (l === 0 && r === 0 && isValid(s)) return res.push(s);

    for (let i = start; i < s.length; i++) {
      if (s[i] === s[i - 1]) continue;
      if (s[i] === ")" && r > 0)
        dfs(s.slice(0, i) + s.slice(i + 1), i, l, r - 1, res);
      if (s[i] === "(" && l > 0)
        dfs(s.slice(0, i) + s.slice(i + 1), i, l - 1, r, res);
    }
  }

  function isValid(s) {
    let cnt = 0;
    for (let i of s) {
      if (i === "(") cnt++;
      if (i === ")") cnt--;
      if (cnt < 0) return false;
    }
    return cnt === 0;
  }

  dfs(s, 0, l, r, res);
  return res;
};

// 2.bfs
// var removeInvalidParentheses = function (s) {
//   let queue = new Set([s]);

//   while (queue.size) {
//     let next = new Set();
//     for (let v of queue) {
//       if (isValid(v)) {
//         return [...queue].filter(isValid);
//       }
//       for (let i = 0; i < v.length; i++) {
//         next.add(v.slice(0, i) + v.slice(i + 1));
//       }
//     }
//     queue = next;
//   }
//   return "";

//   function isValid(s) {
//     let cnt = 0;
//     for (let i of s) {
//       if (i === "(") cnt++;
//       if (i === ")") cnt--;
//       if (cnt < 0) return false;
//     }
//     return cnt === 0;
//   }
// };

let s = "()())()";
Output: ["(())()", "()()()"];
// console.log(removeInvalidParentheses(s));

s = "(a)())()";
Output: ["(a())()", "(a)()()"];
// console.log(removeInvalidParentheses(s));

s = ")(";
// console.log(removeInvalidParentheses(s));

s = "()())()";
console.log(removeInvalidParentheses(s));
