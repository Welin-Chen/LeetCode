/**
 * @param {string} s
 * @return {boolean}
 */

// 1.
// var isValid = function (s) {
//   let i = 0;
//   while (s.length > 3) {
//     if (s[0] !== "a" || s[s.length - 1] !== "c") return false;
//     if (i >= s.length) break;
//     if (s[i] === "a" && s[i + 1] === "b" && s[i + 2] === "c") {
//       s = s.slice(0, i) + s.slice(i + 3);
//       i = 0;
//     } else i++;
//   }
//   return s === "abc" || s.length === 0;
// };

// 2.
var isValid = function (s) {
  while (s.indexOf("abc") >= 0) {
    s = s.split("abc").join("");
  }
  return s.length === 0;
};

// 3.stack
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "c") {
      let b = stack.pop();
      let a = stack.pop();
      if (b !== "b" || a !== "a") return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

s = "aabcbc";
Output: true;
console.log(s, isValid(s));

s = "abcabcababcc";
console.log(s, isValid(s));

s = "abccba";
console.log(s, isValid(s));

s = "abacbc";
console.log(s, isValid(s));

s = "abcbcababcabbbcbbc";
console.log(s, isValid(s));
