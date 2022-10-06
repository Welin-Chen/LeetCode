/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

int* productExceptSelf(int* nums, int numsSize, int* returnSize) {
  int* l = malloc(sizeof(int) * numsSize);
  *returnSize = numsSize;
  l[0] = 1;

  for (int i = 1; i < numsSize; i++) {
    l[i] = l[i - 1] * nums[i - 1];
  }

  int r = 1;
  for (int i = numsSize - 1; i >= 0; i--) {
    l[i] *= r;
    r *= nums[i];
  }
  return l;
}

int main(int argc, char const* argv[]) {
  // Input: nums = [1,2,3,4]
  // Output: [24,12,8,6]
  int nums[] = {1, 2, 3, 4};
  int size = sizeof(nums) / sizeof(nums[0]);
  int* returnSize = &size;

  int* res = productExceptSelf(nums, size, returnSize);

  for (int i = 0; i < size; i++) {
    printf("%d,", res[i]);
  }
  return 0;
}
