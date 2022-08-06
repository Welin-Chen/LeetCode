/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  let j = 0;
  for (let i = 0; i < start.length; i++) {
    if (start[i] === "X") continue;
    while (end[j] === "X" && j < end.length) {
      j++;
    }
    if (start[i] !== end[j]) return false;
    if (start[i] === "L" && i < j) return false;
    if (start[i] === "R" && i > j) return false;
    j++;
  }
  for (let k = j; k < end.length; k++) {
    if (end[k] !== "X") return false;
  }
  return true;
};

let start = "RXXLRXRXL",
  end = "XRLXXRRLX";
Output: true;
console.log(canTransform(start, end));
