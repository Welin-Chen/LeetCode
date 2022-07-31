/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function (n, k) {
//   let res = [];
//   let nums = [];
//   let visited = Array(n).fill(false);
//   for (let i = 1; i <= n; i++) nums[i - 1] = i;

//   function backtrack(s) {
//     // base case
//     if (s.length === nums.length) return res.push(s);
//     // recursion
//     for (let i = 0; i < nums.length; i++) {
//       if (!visited[i]) {
//         visited[i] = true;
//         backtrack(s + nums[i]);
//         visited[i] = false;
//       }
//     }
//   }
//   backtrack("");
//   console.log(res);
//   return res[k - 1];
// };

var getPermutation = function (n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let f = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) f[i] = i * f[i - 1];

  let s = "";
  while (n) {
    let index = Math.ceil(k / f[n - 1]) - 1;
    s += arr.splice(index, 1);
    k = k % f[n - 1] || f[n - 1];
    n--;
  }
  return s;
};

let n = 3,
  k = 3;
Output: "213";
n = 9;
k = 155915;

n = 5;
k = 67;
output: "35124";

n = 3;
k = 2;
output: '"132"';
console.log(getPermutation(n, k));
