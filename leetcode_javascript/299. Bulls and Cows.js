/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let A = 0;
  let B = 0;
  let oA = {};
  let oB = {};

  for (let i = 0; i < secret.length; i++) {
    let s = secret[i];
    let g = guess[i];
    if (s === g) A++;
    else {
      oA[s] = (oA[s] || 0) + 1;
      oB[g] = (oB[g] || 0) + 1;
    }
  }

  for (let i in oA) {
    if (oB[i]) B += Math.min(oA[i], oB[i]);
  }

  return A + "A" + B + "B";
};

// let secret = "1807",
//   guess = "7810";

// console.log(getHint(secret, guess));
// Output: "1A3B";

secret = "1123";
guess = "0111";
// Output: "1A1B"

// secret = "11";
// guess = "10";
console.log(getHint(secret, guess));
