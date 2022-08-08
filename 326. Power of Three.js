/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false;
  while (true) {
    if (n === 1) return true;
    if (n % 3 !== 0) return false;
    n = n / 3;
  }
};

let n = 27;
Output: true;

console.log(isPowerOfThree(n));
