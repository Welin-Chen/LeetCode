/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size,
                  int* returnSize) {
  int* map = malloc(sizeof(int) * 1000);
  int* res = malloc(sizeof(int) * 1000);
  int cnt = 0;

  for (int i = 0; i < nums1Size; i++) {
    map[nums1[i]] = 1;
  }
  for (int i = 0; i < nums2Size; i++) {
    if (map[nums2[i]] == 1) {
      res[cnt++] = nums2[i];
      map[nums2[i]] = 0;
    }
  }
  *returnSize = cnt;
  return res;
}

int main(int argc, char const* argv[]) {
  //     Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2]
  int nums1[] = {1, 2, 2, 1};
  int nums2[] = {2, 2};
  int size1 = sizeof(nums1) / sizeof(nums1[0]);
  int size2 = sizeof(nums2) / sizeof(nums2[0]);
  int sizeR;
  int* returnSize = &sizeR;

  int* a = intersection(nums1, size1, nums2, size2, returnSize);

  for (int i = 0; i < *returnSize; i++) {
    printf("%d,", a[i]);
  }

  return 0;
}
