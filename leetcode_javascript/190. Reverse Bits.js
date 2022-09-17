/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 法1
var reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n >>= 1;
  }
  return res >>> 0;
};

// 法2
// const reverseBits = (n) => {
//   let bits = n.toString(2).padStart(32, "0").split("").reverse().join("");
//   return parseInt(bits, 2);
// };

// let n = "00000010100101000001111010011100";
let n = 00000010100101000001111010011100;
Output: 964176192;

console.log(reverseBits(n));
