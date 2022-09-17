/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      if (map[stack.pop()] !== c) return false;
    }
  }
  return stack.length ? false : true;
};

let s = "()";
Output: true;

s = "()[]{}";
// Output: true;

// s = "(]";
// Output: false;

s = "([)]";
output: false;

s = "[";
s = "((";
console.log(isValid(s));
