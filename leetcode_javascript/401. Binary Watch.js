/**
 * @param {number} turnedOn
 * @return {string[]}
 */
//  hr = [1, 2, 3, 8];
//  min = [1, 2, 3, 8, 16, 32];

var readBinaryWatch = function (turnedOn) {
  let res = [];

  for (let hr = 0; hr < 12; hr++) {
    for (let min = 0; min < 60; min++) {
      if (bitCount(hr) + bitCount(min) === turnedOn) {
        if (min < 10) min = "0" + min;
        res.push(`${hr}:${min}`);
      }
    }
  }
  return res;

  function bitCount(num) {
    return Number(num)
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  }
};

turnedOn = 1;
Output: [
  "0:01",
  "0:02",
  "0:04",
  "0:08",
  "0:16",
  "0:32",
  "1:00",
  "2:00",
  "4:00",
  "8:00",
];
console.log(readBinaryWatch(turnedOn));
