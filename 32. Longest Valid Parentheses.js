/**
 * @param {string} s
 * @return {number}
 */

// 1.two counter
var longestValidParentheses = function (s) {
  let open = 0,
    close = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? open++ : close++;
    if (open === close) max = Math.max(max, close * 2);
    if (close > open) {
      open = 0;
      close = 0;
    }
  }
  open = 0;
  close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === ")" ? close++ : open++;
    if (open === close) max = Math.max(max, open * 2);
    if (open > close) {
      open = 0;
      close = 0;
    }
  }
  return max;
};

// 2. dp method
// var longestValidParentheses = function (s) {
//   let max = 0;
//   let n = s.length;
//   let dp = Array(n).fill(0);

//   //   dp[i]:valid parentheses length at i position
//   for (let i = 0; i < n; i++) {
//     if (i > 0 && s[i] === ")") {
//       if (s[i - 1] === "(") {
//         let v = i - 2 >= 0 ? dp[i - 2] : 0;
//         dp[i] = 2 + v;
//       } else {
//         let idx = i - dp[i - 1] - 1;
//         if (idx >= 0 && s[idx] === "(") {
//           let v = idx - 1 >= 0 ? dp[idx - 1] : 0;
//           dp[i] = 2 + dp[i - 1] + v;
//         }
//       }
//       max = Math.max(max, dp[i]);
//     }
//   }
//   return max;
// };

// 3. stack
// var longestValidParentheses = function (s) {
//   let stack = [-1];
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(i);
//     else {
//       stack.pop();
//       if (stack.length === 0) stack.push(i);
//       let top = stack.length - 1;
//       max = Math.max(max, i - stack[top]);
//     }
//   }
//   return max;
// };

let s = "(()";
Output: 2;
// console.log(longestValidParentheses(s));

s = ")()())";
Output: 4;
console.log(longestValidParentheses(s));

s = "()(()";
output: 2;
// console.log(longestValidParentheses(s));

s = ")()())()()(";
output: 4;
// console.log(longestValidParentheses(s));
