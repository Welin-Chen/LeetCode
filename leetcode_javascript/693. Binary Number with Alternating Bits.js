/**
 * @param {number} n
 * @return {boolean}
 */
// 1.
var hasAlternatingBits = function (n) {
  let prev = !(n & 1);
  while (n > 0) {
    let cur = n & 1;
    if (prev === cur) return false;
    prev = cur;
    n >>>= 1;
  }
  return true;
};

// 2.
// var hasAlternatingBits = function (n) {
//   n = n.toString(2);
//   if (n.indexOf("00") === -1 && n.indexOf("11") === -1) return true;
//   return false;
// };

let n = 5;
Output: true;

n = 7;
Output: false;

n = 11;
Output: false;
console.log(hasAlternatingBits(n));
