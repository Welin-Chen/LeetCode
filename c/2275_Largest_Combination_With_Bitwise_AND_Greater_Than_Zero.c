#include <stdio.h>
#define max(a, b) ((a > b) ? a : b)

int largestCombination(int* nums, int size) {
  int ret = 0;
  for (int i = 0; i < 24; i++) {
    int cnt = 0;
    for (int j = 0; j < size; j++) {
      if (nums[j] & (1 << i)) cnt++;
    }
    // if (cnt > ret) ret = cnt;
    ret = max(ret, cnt);
  }
  return ret;
}

int main(int argc, char const* argv[]) {
  int nums[] = {16, 17, 71, 62, 12, 24, 14};
  int size = sizeof(nums) / sizeof(nums[0]);

  printf("%d\n", largestCombination(nums, size));
  return 0;
}
