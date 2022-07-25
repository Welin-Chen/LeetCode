/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
//   let objs = {},
//     objp = {};
//   let result = [];

//   for (let c of p) objp[c] = (objp[c] || 0) + 1;

//   for (let i = 0; i < s.length; i++) {
//     let c = s[i];
//     objs[c] = (objs[c] || 0) + 1;
//     let start = i - p.length + 1;
//     if (i >= p.length) {
//       let close = s[start - 1];
//       objs[close] -= 1;
//       if (objs[close] === 0) delete objs[close];
//     }
//     if (isEqual(objs, objp)) result.push(start);
//   }

//   function isEqual(objs, objp) {
//     for (let c in objp) {
//       if (objp[c] !== objs[c]) return false;
//     }
//     return true;
//   }
//   return result;
// };

var findAnagrams = function (s, p) {
  let sLen = s.length;
  let pLen = p.length;
  let result = [];
  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);

  for (let i = 0; i < pLen; i++) {
    sArr[s.charCodeAt(i) - 97]++;
    pArr[p.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < sLen; i++) {
    if (isAnagram(sArr, pArr)) result.push(i);
    sArr[s.charCodeAt(i) - 97]--;
    sArr[s.charCodeAt(i + pLen) - 97]++;
  }

  function isAnagram(sArr, pArr) {
    for (let i = 0; i < pArr.length; i++) {
      if (sArr[i] !== pArr[i]) return false;
    }
    return true;
  }
  return result;
};

let s = "cbaebabacd",
  p = "abc";
console.log(findAnagrams(s, p));

Output: [0, 6];

Input: (s = "abab"), (p = "ab");
Output: [0, 1, 2];
