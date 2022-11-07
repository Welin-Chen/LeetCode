/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// int** fourSum(int* nums, int numsSize, int target, int* returnSize,
//               int** returnColumnSizes) {}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */

void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int* a, int low, int high) {
  int pivot = a[high];
  int j = low - 1;
  int i = low;

  for (; i < high; i++) {
    if (a[i] <= pivot) {
      j++;
      swap(&a[i], &a[j]);
    }
  }
  swap(&a[j + 1], &a[high]);
  return j + 1;
}

void quick_sort(int* a, int low, int high) {
  if (low < high) {
    int pivot = partition(a, low, high);
    quick_sort(a, low, pivot - 1);
    quick_sort(a, pivot + 1, high);
  }
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize,
              int** returnColumnSizes) {
  if (numsSize < 4) {
    int** s = (int**)malloc(sizeof(int*));
    *returnSize = 0;
    return s;
  }
  int** ret = (int**)malloc(numsSize * numsSize * sizeof(int*));
  memset(ret, 0, numsSize * numsSize * sizeof(int*));

  int* size = (int*)malloc(numsSize * numsSize * sizeof(int));
  memset(size, 0, numsSize * numsSize * sizeof(int));

  *returnSize = 0;
  int low = 0;
  int high = 0;
  int new_target = 0;
  int sum = 0;

  quick_sort(nums, 0, numsSize - 1);

  for (int i = 0; i < numsSize; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (int j = i + 1; j < numsSize; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      new_target = nums[i] + nums[j];
      low = j + 1;
      high = numsSize - 1;
      while (low < high) {
        sum = nums[low] + nums[high];
        if (sum == target - new_target) {
          ret[*returnSize] = (int*)malloc(4 * sizeof(int));
          memset(ret[*returnSize], 0, 4 * sizeof(int));
          ret[*returnSize][0] = nums[i];
          ret[*returnSize][1] = nums[j];
          ret[*returnSize][2] = nums[low];
          ret[*returnSize][3] = nums[high];
          size[*returnSize] = 4;
          (*returnSize)++;
          low++;
          while (low < high && nums[low - 1] == nums[low]) low++;
        } else if (sum < target - new_target) {
          low++;
        } else if (sum > target - new_target)
          high--;
      }
    }
  }

  int** a = (int**)realloc(ret, (*returnSize) * sizeof(int*));
  *returnColumnSizes = (int*)realloc(size, (*returnSize) * sizeof(int));

  return a;
}

int main(int argc, char const* argv[]) {
  // int a[] = {1, 0, -1, 0, -2, 2};
  // int target = 0;

  int a[] = {2, 2, 2, 2, 2};
  int target = 8;

  // int a[] = {0};
  // int target = 0;

  int size = sizeof(a) / sizeof(a[0]);

  for (int i = 0; i < size; i++) {
    printf("%d,", a[i]);
  }
  printf("\n");

  int b;
  int* returnSize = &b;
  int** returnColumnSizes = &returnSize;

  int** res = fourSum(a, size, target, returnSize, returnColumnSizes);

  printf("%d\n", *returnSize);
  printf("%d\n", **returnColumnSizes);

  printf("[");
  for (int i = 0; i < *returnSize - 1; i++) {
    printf("[");
    for (int j = 0; j < **returnColumnSizes; j++) {
      printf("%d,", res[i][j]);
    }
    printf("],");
  }
  printf("]\n");

  return 0;
}
