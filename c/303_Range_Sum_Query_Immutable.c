#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int* a;
} NumArray;

NumArray* numArrayCreate(int* nums, int numsSize) {
  NumArray* n = malloc(sizeof(NumArray));
  n->a = malloc(sizeof(int) * numsSize);
  n->a[0] = nums[0];

  for (int i = 1; i < numsSize; i++) {
    n->a[i] = n->a[i - 1] + nums[i];
  }
  return n;
}

int numArraySumRange(NumArray* n, int i, int j) {
  if (i == 0) return n->a[j];
  return n->a[j] - n->a[i - 1];
}

void numArrayFree(NumArray* obj) {
  free(obj->a);
  free(obj);
}

/**
 * Your NumArray struct will be instantiated and called as such:
 * NumArray* obj = numArrayCreate(nums, numsSize);
 * int param_1 = numArraySumRange(obj, left, right);

 * numArrayFree(obj);
*/