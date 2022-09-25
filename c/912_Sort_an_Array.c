

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

void merge(int* a, int l, int r, int mid) {
  int b[r - l + 1];
  int i = l;
  int j = mid + 1;
  int k = 0;

  while (i <= mid && j <= r) {
    b[k++] = a[i] < a[j] ? a[i++] : a[j++];
  }

  while (i <= mid) b[k++] = a[i++];
  while (j <= r) b[k++] = a[j++];

  for (int i = l, k = 0; i <= r; i++) {
    a[i] = b[k++];
  }
}

void mergeSort(int* a, int l, int r) {
  if (l >= r) return;

  int mid = (l + r) / 2;

  mergeSort(a, l, mid);
  mergeSort(a, mid + 1, r);

  merge(a, l, r, mid);
}

int* sortArray(int* nums, int numsSize, int* returnSize) {
  *returnSize = numsSize;
  mergeSort(nums, 0, numsSize - 1);
  return nums;
}

int main(int argc, char const* argv[]) {
  //     Input: nums = [5,2,3,1]
  // Output: [1,2,3,5]

  int nums[] = {5, 2, 3, 1};
  int size = sizeof(nums) / sizeof(nums[0]);
  sortArray(nums, size, &size);

  for (int i = 0; i < size; i++) {
    printf("%d, ", nums[i]);
  }

  return 0;
}
