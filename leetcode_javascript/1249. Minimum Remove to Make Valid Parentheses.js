/**
 * @param {string} s
 * @return {string}
 */
// 1.counter
// var minRemoveToMakeValid = function (s) {
//   let cnt = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") cnt++;
//     if (s[i] === ")") cnt--;
//     if (cnt < 0) {
//       s = s.slice(0, i) + s.slice(i + 1);
//       cnt++;
//       i--;
//     }
//   }
//   if (cnt === 0) return s;

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === "(") {
//       s = s.slice(0, i) + s.slice(i + 1);
//       cnt--;
//       if (cnt === 0) return s;
//     }
//   }
// };

// 2. stack
var minRemoveToMakeValid = function (s) {
  let stack = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    if (s[i] === ")") {
      if (stack.length) stack.pop();
      else s[i] = "";
    }
  }
  for (let i of stack) s[i] = "";
  return s.join("");
};

let s = "lee(t(c)o)de)";
// let s = "(((lee(t(c)o)de)";
Output: "lee(t(c)o)de";
s = "))((";
s = "())()(((";
s = ")))t((u)";
console.log(minRemoveToMakeValid(s));
