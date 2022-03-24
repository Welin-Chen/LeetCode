/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let num = 0;
  let el = "";
  let before = "";
  for (let i = 0; i < s.length; i++) {
    el = s[i];
    if (i > 0) {
      before = s[i - 1];
    }
    // console.log(i, el);
    if (el === "I") num += 1;
    else if (el === "V") num += 5;
    else if (el === "X") num += 10;
    else if (el === "L") num += 50;
    else if (el === "C") num += 100;
    else if (el === "D") num += 500;
    else if (el === "M") num += 1000;

    if ((before === "I") & (el === "V" || el === "X")) num -= 2;
    if ((before === "X") & (el === "L" || el === "C")) num -= 20;
    if ((before === "C") & (el === "D" || el === "M")) num -= 200;
  }

  return num;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("VI"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("XL"));
// console.log(romanToInt("XC"));
// console.log(romanToInt("CD"));
console.log(romanToInt("CM"));
