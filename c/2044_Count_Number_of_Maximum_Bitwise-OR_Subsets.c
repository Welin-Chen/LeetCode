#include <stdio.h>

void subsets(int* nums, int i, int bitOr, int max, int size, int* cnt) {
  if (i == size) return;
  if ((bitOr | nums[i]) == max) (*cnt)++;

  subsets(nums, i + 1, bitOr, max, size, cnt);
  subsets(nums, i + 1, bitOr | nums[i], max, size, cnt);
}

int countMaxOrSubsets(int* nums, int numsSize) {
  int max = 0;
  int cnt = 0;
  int* cntptr;

  cntptr = &cnt;

  for (int i = 0; i < numsSize; i++) {
    max |= nums[i];
  }

  subsets(nums, 0, 0, max, numsSize, cntptr);

  return cnt;
}

int main(int argc, char const* argv[]) {
  // Input: nums = [3,2,1,5]
  // Output: 6
  //   const int n = 4;
  //   int nums[n] = {3, 2, 1, 5};

  const int n = 3;
  int nums[n] = {2, 2, 2};
  for (int i = 0; i < n; i++) printf("%d, ", nums[i]);
  printf("\n\n");

  int res = countMaxOrSubsets(nums, n);
  printf("\n%d", res);

  return 0;
}
