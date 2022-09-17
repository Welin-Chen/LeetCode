/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function guess(n) {
  if (n > pick) return -1;
  else if (n < pick) return 1;
  else return pick;
}

var guessNumber = function (n) {
  let l = 0;
  let r = n;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let g = guess(mid);
    if (g === -1) r = mid - 1;
    else if (g === 1) l = mid + 1;
    else return mid;
  }
};

let n = 10,
  pick = 6;
Output: 6;
console.log(guessNumber(n));
