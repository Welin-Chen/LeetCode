#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int bits(int n) {
  int ones = 0;
  while (n) {
    if (n & 1) ones++;
    n >>= 1;
  }
  return ones;
}

int cmp(int* a, int* b) {
  int a_val = *a;
  int b_val = *b;

  int a_bit = 0;
  int b_bit = 0;

  while (a_val) {
    if (a_val & 1) a_bit++;
    a_val >>= 1;
  }

  while (b_val) {
    if (b_val & 1) b_bit++;
    b_val >>= 1;
  }

  if (a_bit != b_bit) return a_bit - b_bit;
  return *a - *b;
}

int* sortByBits(int* arr, int arrSize, int* returnSize) {
  *returnSize = arrSize;
  qsort(arr, arrSize, sizeof(int), cmp);
  return arr;
}

int main(int argc, char const* argv[]) {
  // Input: arr = [0,1,2,3,4,5,6,7,8]
  // Output: [0,1,2,4,8,3,5,6,7]

  int arr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8};
  int size = sizeof(arr) / sizeof(arr[0]);
  for (int i = 0; i < size; i++) {
    printf("%d,", arr[i]);
  }
  printf("\n");

  int* res = sortByBits(arr, size, &size);

  for (int i = 0; i < size; i++) {
    printf("%d,", res[i]);
  }

  return 0;
}
