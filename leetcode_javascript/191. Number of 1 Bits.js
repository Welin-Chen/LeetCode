/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 法1
// var hammingWeight = function (n) {
//   return Number(n)
//     .toString(2)
//     .split("")
//     .filter((el) => el === "1").length;
// };

// 法2
var hammingWeight = function (n) {
  let cnt = 0;
  while (n > 0) {
    cnt += n & 1;
    n >>>= 1;
  }
  return cnt;
};

let n = 00000000000000000000000000001011;
Output: 3;

// n = "111".toString(2);
n = 011;
console.log(n);
console.log(hammingWeight(n));
