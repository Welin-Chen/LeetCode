var findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  for (let word of dictionary) {
    let index = -1;
    for (let c of word) {
      index = s.indexOf(c, index + 1);
      if (index < 0) break;
    }
    if (index >= 0) return word;
  }
  return "";
};

// var findLongestWord = function (s, dictionary) {
//   let res = [];
//   for (let c of dictionary) {
//     let l = 0;
//     let r = s.length - 1;
//     let n = 0;
//     for (let i = 0; i < c.length; i++) {
//       while (l <= r) {
//         if (s[l] === c[i]) {
//           n++;
//           l++;
//           break;
//         }
//         l++;
//       }
//       if (l > r) break;
//     }
//     if (n === c.length) res.push(c);
//   }
//   let max = 0;
//   let idx = 0;
//   for (let i = 0; i < res.length; i++) {
//     let c = res[i];

//     if (c.length > max) {
//       idx = i;
//       max = c.length;
//     } else if (c.length === max) {
//       let c0 = res[idx];
//       for (let j = 0; j < c.length; j++) {
//         if (c.charCodeAt(j) < c0.charCodeAt(j)) {
//           idx = i;
//           max = c.length;
//           break;
//         } else if (c.charCodeAt(j) === c0.charCodeAt(j)) {
//           continue;
//         } else break;
//       }
//     }
//   }

//   return res.length ? res[idx] : "";
// };

let s = "abpcplea";
let dictionary = ["ale", "apple", "monkey", "plea"];
Output: "apple";

s = "abce";
dictionary = ["abe", "abc"];

s = "abpcplea";
dictionary = [
  "ale",
  "apple",
  "monkey",
  "plea",
  "abpcplaaa",
  "abpcllllll",
  "abccclllpppeeaaaa",
];

// s = "apple";
// dictionary = ["zxc", "vbn"];

s = "wordgoodgoodgoodbestword";
dictionary = ["word", "good", "best", "good"];
console.log(findLongestWord(s, dictionary));
