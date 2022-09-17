/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let open = 0;
  let insert = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") open++;
    else {
      if (i + 1 < s.length && s[i + 1] === ")") open--, i++;
      else insert++, open--;
    }
    if (open < 0) insert++, open++;
  }
  return insert + open * 2;
};

let s = "(()))";
Output: 1;
console.log(minInsertions(s));

s = "())";
Output: 0;
console.log(minInsertions(s));

s = "))())(";
Output: 3;

console.log(minInsertions(s));
