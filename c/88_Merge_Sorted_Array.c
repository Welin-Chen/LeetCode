#include <limits.h>
#include <stdio.h>

void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
  int end = m + n - 1;

  while (m > 0 || n > 0) {
    int x = m ? nums1[m - 1] : INT_MIN;
    int y = n ? nums2[n - 1] : INT_MIN;

    if (x > y) {
      nums1[end--] = x;
      m--;
    } else {
      nums1[end--] = y;
      n--;
    }
  }
}

int main(int argc, char const* argv[]) {
  // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  // Output: [1,2,2,3,5,6]
  int nums1[] = {1, 2, 3, 0, 0, 0};
  int m = 3;
  int nums2[] = {2, 5, 6};
  int n = 3;
  int size1 = sizeof(nums1) / sizeof(nums1[0]);
  int size2 = sizeof(nums2) / sizeof(nums2[0]);
  merge(nums1, size1, m, nums2, size2, n);

  for (int i = 0; i < size1; i++) {
    printf("%d,", nums1[i]);
  }
  return 0;
}
