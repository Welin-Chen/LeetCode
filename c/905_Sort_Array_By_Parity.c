

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>

int* sortArrayByParity(int* nums, int numsSize, int* returnSize) {
  int l = 0;
  int r = numsSize - 1;
  int t;
  *returnSize = numsSize;

  while (l < r) {
    if (nums[l] % 2 == 1 && nums[r] % 2 == 0) {
      t = nums[l];
      nums[l] = nums[r];
      nums[r] = t;
    }
    if (nums[l] % 2 == 0) l++;
    if (nums[r] % 2 == 1) r--;
  }

  return nums;
}

int main(int argc, char const* argv[]) {
  //   Input: nums = [3,1,2,4]
  // Output: [2,4,3,1]
  int nums[] = {3, 1, 2, 4};
  int size = sizeof(nums) / sizeof(nums[0]);
  int* returnSize = &size;
  sortArrayByParity(nums, size, returnSize);

  for (int i = 0; i < size; i++) {
    printf("%d, ", nums[i]);
  }

  return 0;
}
