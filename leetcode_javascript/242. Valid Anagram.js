/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let hs = {};
//   let ht = {};
//   for (let c of s) hs[c] = (hs[c] || 0) + 1;
//   for (let c of t) ht[c] = (ht[c] || 0) + 1;
//   for (let c of t) if (ht[c] !== hs[c]) return false;
//   return true;
// };

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let c of s) hash[c] = (hash[c] || 0) + 1;
  for (let c of t) {
    if (!hash[c]) return false;
    hash[c]--;
  }
  return true;
};

let s = "anagram";
t = "nagaram";
Output: true;
s = "ab";
t = "a";

console.log(isAnagram(s, t));
