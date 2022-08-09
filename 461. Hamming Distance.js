/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 1.
// var hammingDistance = function (x, y) {
//   x = x.toString(2).padStart(32, 0).split("");
//   y = y.toString(2).padStart(32, 0).split("");

//   let cnt = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) cnt++;
//   }
//   return cnt;
// };

// 2.
var hammingDistance = function (x, y) {
  let xor = x ^ y; //xor:[0101],0:same,1:different
  let cnt = 0;

  while (xor > 0) {
    if (xor & 1) cnt++;
    xor >>>= 1;
  }
  return cnt;
};

let x = 1,
  y = 4;
Output: 2;

// (x = 3), (y = 1);
// Output: 1;
console.log(hammingDistance(x, y));
