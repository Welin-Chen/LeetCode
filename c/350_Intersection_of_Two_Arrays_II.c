/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* intersect(int* nums1, int nums1Size, int* nums2, int nums2Size,
               int* returnSize) {
  int* map = malloc(sizeof(int) * 1001);
  int* res = malloc(sizeof(int) * 1001);
  memset(map, 0, 1001 * sizeof(int));
  memset(res, 0, 1001 * sizeof(int));

  int cnt = 0;

  for (int i = 0; i < nums1Size; i++) {
    int n = nums1[i];
    map[n] = map[n] ? map[n] + 1 : 1;
  }
  for (int i = 0; i < nums2Size; i++) {
    int n = nums2[i];
    if (map[n]) {
      res[cnt++] = n;
      map[n]--;
    }
  }
  *returnSize = cnt;
  return res;
}

int main(int argc, char const* argv[]) {
  // Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2,2]
  int nums1[] = {1, 2, 2, 1};
  int nums2[] = {2, 2};
  int size;
  int* returnSize = &size;
  int* a = intersect(nums1, 4, nums2, 2, returnSize);

  for (int i = 0; i < *returnSize; i++) {
    printf("%d,", a[i]);
  }
  return 0;
}
