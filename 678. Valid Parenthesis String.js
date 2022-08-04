/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let lmin = 0;
  let lmax = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      lmin++;
      lmax++;
    }
    if (s[i] === ")") {
      lmin--;
      lmax--;
    }
    if (s[i] === "*") {
      lmin--;
      lmax++;
    }
    if (lmin < 0) lmin++;
    if (lmax < 0) return false;
  }
  return lmin === 0;
};

let s = "()";
Output: true;

s = "(*))";
Output: true;
console.log(checkValidString(s));
