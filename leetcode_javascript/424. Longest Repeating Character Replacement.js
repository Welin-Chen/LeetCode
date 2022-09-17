/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0,
    right = 0;
  let maxf = 0;
  let seen = {};

  while (right < s.length) {
    let c = s[right];
    seen[c] = (seen[c] || 0) + 1;
    if (seen[c] > maxf) maxf = seen[c];
    if (right - left + 1 > maxf + k) {
      seen[s[left]]--;
      left++;
    }
    right++;
  }
  return right - left;
};

let s = "AABABBA",
  k = 1;
console.log(characterReplacement(s, k));
Output: 4;
