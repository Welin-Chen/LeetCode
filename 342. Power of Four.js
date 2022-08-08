/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 0) return false;
  while (true) {
    if (n === 1) return true;
    if (n % 4 !== 0) return false;
    n = n / 4;
  }
};

let n = 16;
Output: true;
console.log(isPowerOfFour(n));
