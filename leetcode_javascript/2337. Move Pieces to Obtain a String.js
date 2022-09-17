/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let j = 0;
  for (let i = 0; i < start.length; i++) {
    if (start[i] === "_") continue;
    while (j < target.length && target[j] === "_") {
      j++;
    }
    if (start[i] !== target[j]) return false;
    if (start[i] === "L" && i < j) return false;
    if (start[i] === "R" && i > j) return false;
    j++;
  }
  for (let k = j; k < target.length; k++) {
    if (target[k] !== "_") return false;
  }
  return true;
};

let start = "_L__R__R_",
  target = "L______RR";
Output: true;

// (start = "R_L_"), (target = "__LR");
// Output: false;
// (start = "_R"), (target = "R_");
// Output: false;

// start = "_L__R__RL";
// target = "L_____RLR";
// output: false;

start = "____";
target = "R_L_";
output: false;
console.log(canChange(start, target));
