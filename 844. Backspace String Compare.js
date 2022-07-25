/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  function helper(s) {
    let res = [];
    for (let c of s) {
      c === "#" ? res.pop() : res.push(c);
    }
    return res.join("");
  }
  return helper(s) === helper(t);
};
// var backspaceCompare = function (s, t) {
//   function helper(s) {
//     s = s.split("");
//     let i = 0;
//     for (let c of s) {
//       if (c !== "#") {
//         s[i] = c;
//         i++;
//       } else if (i > 0) i--;
//     }
//     s = s.splice(0, i);
//     return s.join("");
//   }
//   return helper(s) === helper(t);
// };
let s = "#ab#c",
  t = "ad#c";

// s = "ab##";
// t = "c#d#";
// s = "a#c";
// t = "b";
// s = "a#c";
// t = "b";
console.log(backspaceCompare(s, t));
Output: true;
