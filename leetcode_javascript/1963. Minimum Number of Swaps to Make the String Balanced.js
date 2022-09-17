/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let close = 0;
  let maxClose = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") close--;
    if (s[i] === "]") close++;
    maxClose = Math.max(maxClose, close);
  }
  return Math.floor((maxClose + 1) / 2);
};

// var minSwaps = function (s) {
//   let stack = [];
//   for (let i of s) {
//     if (i === "[") stack.push(i);
//     if (stack && i === "]") stack.pop();
//   }
//   return Math.floor((stack.length + 1) / 2);
// };

let s = "][][";
Output: 1;
// s = "]]][[[";
Output: 2;
// s = "[]";
console.log(minSwaps(s));
