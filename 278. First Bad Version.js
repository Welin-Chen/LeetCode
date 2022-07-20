/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
isBadVersion = function (version) {
  return version === 3;
};

var solution = function (isBadVersion) {
  return function (n) {
    let start = 1,
      end = n,
      min = 0;
    while (start <= end) {
      if (isBadVersion(start)) return start;
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        min = mid;
        end = mid - 1;
      } else start = mid + 1;
    }
    return min;
  };
};

let n = 5,
  bad = 4;
Output: 4;

console.log(solution(isBadVersion)(6));
