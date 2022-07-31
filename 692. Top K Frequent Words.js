/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let hash = {};
  for (let w of words) {
    hash[w] = (hash[w] || 0) + 1;
  }
  //   console.log(hash);
  let arr = Object.keys(hash);
  arr.sort((a, b) => {
    let diff = hash[b] - hash[a];
    return diff === 0 ? a.localeCompare(b) : diff;
  });
  return arr.slice(0, k);
};

let words = ["i", "love", "leetcode", "i", "love", "coding"],
  k = 3;
console.log(topKFrequent(words, k));
Output: ["i", "love"];

words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
k = 4;
// console.log(topKFrequent(words, k));

Output: ["the", "is", "sunny", "day"];
