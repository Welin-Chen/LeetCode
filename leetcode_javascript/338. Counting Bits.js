/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    let ones = i
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
    res.push(ones);
  }
  return res;
};

let n = 2;
Output: [0, 1, 1];

n = 5;
Output: [0, 1, 1, 2, 1, 2];

console.log(countBits(n));
