/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          let right = [...nums.slice(i + 1).reverse()];
          let index = 0;
          for (let k = i + 1; k < n; k++) {
            nums[k] = right[index++];
          }
          return nums;
        }
      }
    }
  }
  return nums.reverse();
};

let nums = [1, 2, 3];
Output: [1, 3, 2];
// nums = [1, 1, 5];
Output: [1, 5, 1];
// nums = [3, 2, 1];
nums = [1, 3, 2];
console.log(nextPermutation(nums));
