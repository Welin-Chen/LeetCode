/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      let l = i;
      let r = i + 1;
      while (s[i] === s[l] && s[i + 1] === s[r]) {
        res++;
        l--;
        r++;
      }
    }
  }
  return res;
};

// var countBinarySubstrings = function (s) {
//   let cur = 1;
//   let prev = 0;
//   let count = 0;
//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === s[i - 1]) cur++;
//     else {
//       count += Math.min(cur, prev);
//       prev = cur;
//       cur = 1;
//     }
//   }
//   return (count += Math.min(cur, prev));
// };

let s = "00110011";
Output: 6;
console.log(countBinarySubstrings(s));

Input: s = "10101";
Output: 4;
console.log(countBinarySubstrings(s));

s = "00110";
console.log(countBinarySubstrings(s));
