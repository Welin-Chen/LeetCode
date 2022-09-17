/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//   let obj = {};
//   let key;
//   for (let i = 0; i < s.length; i++) {
//     key = s[i];
//     obj[key] = obj[key] === undefined ? 1 : obj[key] + 1;
//   }

//   let arr = Object.values(obj);
//   let sum = 0;
//   let allEven = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) sum += arr[i];
//     else {
//       sum += arr[i] - 1;
//       allEven = false;
//     }
//   }
//   return allEven ? sum : sum + 1;
// };

var longestPalindrome = function (s) {
  let sum = 0;
  let obj = {};

  for (let key of s) {
    obj[key] = (obj[key] || 0) + 1;
    if (obj[key] % 2 === 0) sum += 2;
  }
  return s.length === sum ? sum : sum + 1;
};

// let s = "abccccdd"; //7
// let s = "a"; //1
// let s = "bb"; //2
let s = "bananas"; //5

console.log(longestPalindrome(s));
