/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let v = nums[mid];
    if (target === v) return mid;
    if (target > v) left = mid + 1;
    if (target < v) right = mid - 1;
  }
  return left;
};

// let nums = [1, 3],
//   target = 2;
// let nums = [1, 3, 5, 6],
//   target = 2;
//1
// let nums = [1, 3, 5, 6],
//   target = 5;
// Output: 2;

// let nums = [1, 3, 5, 6],
//   target = 2;
// Output: 1;

// let nums = [1, 3, 5, 6],
//   target = 7;
// Output: 4;

// let nums = [1, 3, 5, 6],
//   target = 0;

// let nums = [1],
//   target = 1;

console.log(searchInsert(nums, target));
