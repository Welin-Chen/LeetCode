var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let n = nums[mid];
    if (n > target) r = mid - 1;
    else if (n < target) l = mid + 1;
    else return mid;
  }
  return l;
};

// let nums = [1, 3],
//   target = 2;
let nums = [1, 3, 5, 6],
  target = 2;
console.log(searchInsert(nums, target));

//1
nums = [1, 3, 5, 6];
target = 5;
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
