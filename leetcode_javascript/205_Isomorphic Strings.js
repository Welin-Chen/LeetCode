/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s === t) return true;
  if (s.length !== t.length) return false;
  let obj1 = {},
    obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj1[s[i]] && !obj2[t[i]]) {
      obj1[s[i]] = t[i];
      obj2[t[i]] = s[i];
    } else if (obj1[s[i]] !== t[i] || obj2[t[i] !== s[i]]) return false;
  }

  return true;
};

// let s = "egg",
//   t = "add";
// let s = "foo",
//   t = "bar";
// let s = "paper",
//   t = "title";
let s = "bbbaaaba",
  t = "aaabbbba";
console.log(isIsomorphic(s, t));
