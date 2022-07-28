/**
 * @param {string} s
 * @return {string}
 */
// var decodeString = function (s) {
//   let stack = [];
//   let currStr = "";
//   let currNum = 0;

//   for (let c of s) {
//     if (c === "[") {
//       stack.push(currStr);
//       stack.push(currNum);
//       currStr = "";
//       currNum = 0;
//     } else if (c === "]") {
//       let prevNum = stack.pop();
//       let prevStr = stack.pop();
//       currStr = prevStr + currStr.repeat(prevNum);
//     } else if (c >= "0" && c <= "9") {
//       currNum = currNum * 10 + Number(c);
//     } else {
//       currStr += c;
//     }
//   }
//   return currStr;
// };

var decodeString = function (s) {
  let stack = [];
  let str = "";
  let n = 0;
  for (let c of s) {
    if (c === "[") {
      stack.push(n);
      stack.push(str);
      str = "";
      n = 0;
    } else if (c === "]") {
      let str0 = stack.pop();
      let n0 = stack.pop();
      str = str0 + str.repeat(n0);
    } else if (Number.isInteger(Number(c))) {
      n = n * 10 + Number(c);
    } else {
      str += c;
    }
  }
  return str;
};
// let s = "3[a]2[bc]";
// console.log(decodeString(s));
Output: "aaabcbc";

s = "3[a2[c]]";
// s = "100[leetcode]";
console.log(decodeString(s));

Output: "accaccacc";
