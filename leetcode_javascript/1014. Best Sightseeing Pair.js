var maxScoreSightseeingPair = function (values) {
  let n = values.length;
  let max = 0;

  for (let i = 0, j = 1; j < n; j++) {
    let score = values[i] + values[j] + i - j;
    max = Math.max(max, score);
    if (values[i] + i <= values[j] + j) i = j;
  }
  return max;
};

let values = [8, 1, 5, 2, 6];
Output: 11;
// console.log(maxScoreSightseeingPair(values));

values = [7, 8, 8, 10];
console.log(maxScoreSightseeingPair(values));
