/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let n = 0;
  while (n < strs[0].length) {
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][n] !== strs[i + 1][n]) {
        return strs[0].substring(0, n);
      }
    }
    n++;
  }
  return strs[0].substring(0, n);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
