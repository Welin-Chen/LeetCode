/**
 * @param {string} s
 * @return {number}
 */

// 法1
// var minAddToMakeValid = function (s) {
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === "(" && s[i] === ")") {
//       s = s.slice(0, i - 1) + s.slice(i + 1);
//       i = 0;
//     }
//   }
//   return s.length;
// };

// 法2
// var minAddToMakeValid = function (s) {
//   while (s.includes("()")) s = s.replace("()", "");
//   return s.length;
// };

// 3. stack
var minAddToMakeValid = function (s) {
  let stack = [];
  for (let c of s) {
    if (c === "(") stack.push(c);
    else if (c === ")" && stack[stack.length - 1] === "(") stack.pop();
    else stack.push(c);
  }
  return stack.length;
};

s = "())";
Output: 1;

// s = "(((";
// Output: 3;

// s = "()";

s = "()))((";
// s = "()()";
console.log(minAddToMakeValid(s));
