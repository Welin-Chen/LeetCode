var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    let n = nums[mid];

    if (n < target) l = mid + 1;
    else if (n > target) r = mid - 1;
    else return mid;
  }
  return -1;
};

// let nums = [-1, 0, 3, 5, 9, 12],
//   target = 2;
let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
console.log(search(nums, target));

nums = [-1, 0, 3, 5, 9, 12];
target = 2;
console.log(search(nums, target));
