/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// 1.
// var countPrimeSetBits = function (left, right) {
//   let res = 0;
//   let visited = {};
//   for (let i = left; i <= right; i++) {
//     let ones = i
//       .toString(2)
//       .split("")
//       .filter((el) => el === "1").length;
//     if (visited[ones] === undefined) visited[ones] = isPrime(ones);
//     if (visited[ones]) res++;
//   }
//   return res;

//   function isPrime(n) {
//     if (n === 1) return false;
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
// };

// 2.
var countPrimeSetBits = function (left, right) {
  let primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let res = 0;

  for (let i = left; i <= right; i++) {
    if (primes.has(getOnes(i))) res++;
  }
  return res;

  function getOnes(n) {
    let res = 0;
    while (n) {
      if (n & 1) res++;
      n >>>= 1;
    }
    return res;
  }
};
// [2, 3, 5, 7, 11, 13, 17, 19];
let left = 6,
  right = 10;
Output: 4;
console.log((10 ** 6).toString(2).length);
console.log(countPrimeSetBits(left, right));
