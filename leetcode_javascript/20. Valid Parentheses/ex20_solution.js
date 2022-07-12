/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  while (true) {
    if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
      return false;
    }
    let last = s[s.length - 1];
    if (last === "(" || last === "[" || last === "{") {
      return false;
    }

    if (
      s.indexOf("()") === -1 &&
      s.indexOf("{}") === -1 &&
      s.indexOf("[]") === -1
    ) {
      return false;
    }

    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
    if (s === "") {
      return true;
    }
  }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("]["));
console.log(isValid("({[)"));
console.log(isValid("{[]}"));
