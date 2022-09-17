/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function (s, t) {
//   if (s.length > t.length) return false;
//   let j = 0;
//   for (let i = 0; i < s.length; i++) {
//     while (s[i] !== t[j]) {
//       j++;
//       if (j > t.length - 1) return false;
//     }
//     if (s[i] === t[j]) j++;
//   }
//   return true;
// };
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
  }
  return s.length === j;
};
let t = "abc",
  s = "ahbgdc";
// let s = "axc",
//   t = "ahbgdc";
// let t = "abc",
//   s = "";
// let t = "aaaaaa",
//   s = "bbaaaa";
console.log(isSubsequence(t, s));
