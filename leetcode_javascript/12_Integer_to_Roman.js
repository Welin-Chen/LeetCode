/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   let numStr = num.toString();
//   let str = "";
//   let M = numStr.slice(0, numStr.length - 3 > 0 ? numStr.length - 3 : 0) % 10;
//   for (let i = 0; i < M; i++) str += "M";

//   let C = numStr.slice(0, numStr.length - 2) % 10;
//   if (C === 4) str += "CD";
//   else if (C === 9) str += "CM";
//   else {
//     if (C >= 5) str += "D";
//     for (let i = 0; i < C % 5; i++) str += "C";
//   }

//   let X = numStr.slice(0, numStr.length - 1) % 10;
//   if (X === 4) str += "XL";
//   else if (X === 9) str += "XC";
//   else {
//     if (X >= 5) str += "L";
//     for (let i = 0; i < X % 5; i++) str += "X";
//   }

//   let I = num % 10;
//   if (I === 4) str += "IV";
//   else if (I === 9) str += "IX";
//   else {
//     if (I >= 5) str += "V";
//     for (let i = 0; i < I % 5; i++) str += "I";
//   }
//   return str;
// };

// var intToRoman = function (num) {
//   let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   let symbol = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   let i = 0,
//     result = "";
//   while (num > 0) {
//     if (num - value[i] >= 0) {
//       result += symbol[i];
//       num -= value[i];
//     } else i++;
//   }
//   return result;
// };

var intToRoman = function (num) {
  let map = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" },
  ];

  let i = 0,
    result = "";
  while (num > 0) {
    if (num - map[i].val >= 0) {
      result += map[i].sym;
      num -= map[i].val;
    } else i++;
  }
  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
