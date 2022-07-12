/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var search = function (nums, target) {
//       if (nums.length === 1 && nums[0] !== target) return -1;
//       let mid = Math.floor(nums.length / 2);
//       if (target === nums[mid]) return mid;
//       if (target < nums[mid]) return search(nums.slice(0, mid), target);
//       if (target > nums[mid]) {
//         if (search(nums.slice(mid), target) === -1) return -1;
//         return mid + search(nums.slice(mid), target);
//       }
//  }
var search = function (nums, target) {
  let mid,
    left = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    if (target > nums[mid]) left = mid + 1;
  }
  return -1;
};

// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 2;
let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
console.log(search(nums, target));
