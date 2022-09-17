/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
// time exceed
// var canBeValid = function (s, locked) {
//   if (s.length % 2 !== 0) return false;
//   if (s[0] === ")" && locked[0] === "1") return false;
//   if (s[s.length - 1] === "(" && locked[locked.length - 1] === "1")
//     return false;

//   let temp = "";
//   function dfs(s, index) {
//     if (isValid(s)) {
//       console.log(s);
//       return true;
//     }
//     if (index === s.length) return;

//     for (let i = index; i < s.length; i++) {
//       if (locked[i] === "0") {
//         temp = s[i] === "(" ? ")" : "(";
//         let s1 = s.slice(0, i) + temp + s.slice(i + 1);
//         if (dfs(s1, i + 1)) return true;
//       }
//     }
//     return false;
//   }

//   return dfs(s, 0);

//   function isValid(s) {
//     let cnt = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "(") cnt++;
//       if (s[i] === ")") cnt--;
//       if (cnt < 0) return false;
//     }
//     return cnt === 0;
//   }
// };

// Greedy method
var canBeValid = function (s, locked) {
  if (s.length % 2 !== 0) return false;

  //   lmin: min unmatched '('
  //   lmax: max unmatched '('
  let lmin = 0;
  let lmax = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "1") {
      if (s[i] === "(") lmin++, lmax++;
      if (s[i] === ")") lmin--, lmax--;
    } else lmin--, lmax++;

    // invalid case
    if (lmin < 0) lmin += 2;
    if (lmax < 0) return false;
  }
  return lmin === 0;
};

let s = "))()))",
  locked = "010100";
Output: true;

// (s = "()()"), (locked = "0000");
// Output: true;

// (s = ")"), (locked = "0");

// s = ")(";
// locked = "00";

// s = "))))(())((()))))((()((((((())())((()))((((())()()))(()";
// locked = "101100101111110000000101000101001010110001110000000101";

// s = "()";
// locked = "11";
console.log(canBeValid(s, locked));
