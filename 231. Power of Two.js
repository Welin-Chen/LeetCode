/**
 * @param {number} n
 * @return {boolean}
 */
// 1.
// var isPowerOfTwo = function (n) {
//   if (n === 0) return false;
//   if (n === 1) return true;

//   if (n % 2 !== 0) return false;
//   n = n / 2;
//   return isPowerOfTwo(n);
// };

// 2.
var isPowerOfTwo = function (n) {
  if (n === 0) return false;

  while (true) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
};

let n = 1;
Output: true;

n = 16;
Output: true;

n = 3;
Output: false;

n = 6;
output: false;

n = 0;

n = 16;

n = 1;
console.log(isPowerOfTwo(n));
