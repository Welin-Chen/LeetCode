// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let obj = {};
//   let str = "";
//   let maxStr = "";
//   let maxLen = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]] !== undefined) {
//       for (let j = 0; j < str.length; j++) {
//         obj[str[j]] = undefined;
//         if (str[j] === s[i]) {
//           str = str.slice(j + 1);
//           break;
//         }
//       }
//     }
//     obj[s[i]] = s[i];
//     str += s[i];
//     if (str.length > maxLen) {
//       maxLen = str.length;
//       maxStr = str;
//     }
//   }
//   return maxLen;
// };

var lengthOfLongestSubstring = function (s) {
  let seen = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    if (seen[key] !== undefined) start = Math.max(start, seen[key] + 1);
    seen[key] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

let s = "tmmzuxt"; //5
// let s = "dvdf"; //3
// let s = "abcabcbb"; //3
// let s = "pwwkew"; //3
// let s = "aab"; //2

console.log(lengthOfLongestSubstring(s));
