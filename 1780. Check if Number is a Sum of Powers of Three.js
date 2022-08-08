/**
 * @param {number} n
 * @return {boolean}
 */
// 1.
// var checkPowersOfThree = function (n) {
//   let res = false;

//   function dfs(n, index) {
//     // base case
//     if (n === 0) return (res = true);
//     if (n < 0) return false;
//     for (let i = index; i < 20; i++) {
//       dfs(n - 3 ** i, i + 1);
//       if (res) return true;
//     }
//   }
//   dfs(n, 0);
//   return res;
// };

// 2.
// var checkPowersOfThree = function (n) {
//   for (let i = 15; i >= 0; i--) {
//     let x = Math.pow(3, i);
//     console.log(n, x);
//     if (n >= x) n -= x;
//     if (n === 0) return true;
//   }
//   return false;
// };

// 3.
var checkPowersOfThree = function (n) {
  while (n > 0) {
    if (n % 3 === 2) return false;
    // n = (n / 3) >>> 0;
    n = Math.floor(n / 3);
  }
  return true;
};

let n = 12;
Output: true;

// n = 91;
// Output: true;

// n = 21;
// Output: false;

// n = 6378022;
// output: true;

// n = 3678852;

n = 91;
console.log(checkPowersOfThree(n));
