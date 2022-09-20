#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int arrayPairSum(int* nums, int numsSize) {
  int max = 0;

  qsort(nums, numsSize, sizeof(nums[0]), cmp);

  for (int i = 0; i < numsSize; i++) {
    if (i % 2 == 0) max += nums[i];
  }
  return max;
}

int main(int argc, char const* argv[]) {
  int nums[] = {6, 2, 6, 5, 1, 2};
  int size = sizeof(nums) / sizeof(nums[0]);
  printf("%d\n", arrayPairSum(nums, size));
  return 0;
}
