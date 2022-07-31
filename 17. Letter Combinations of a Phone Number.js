/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [];
  function dfs(s, i) {
    // base case
    if (i === digits.length) {
      res.push(s);
      return;
    }
    // recursion
    for (let c of map[digits[i]]) {
      dfs(s + c, i + 1);
    }
  }
  dfs("", 0);
  return res;
};

Input: digits = "23";
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
console.log(letterCombinations(digits));
