#include <stdio.h>
#include <stdlib.h>

int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize,
                 int* returnSize) {
  int* res;
  int m = matrixSize;
  int n = *matrixColSize;
  int idx = 0;
  int top = 0;
  int bottom = m - 1;
  int left = 0;
  int right = n - 1;
  res = (int*)malloc(sizeof(int) * m * n);

  while (left <= right && top <= bottom) {
    for (int j = left; j <= right; j++) {
      res[idx++] = matrix[top][j];
    }
    top++;

    for (int i = top; i <= bottom; i++) {
      res[idx++] = matrix[i][right];
    }
    right--;

    if (left > right || top > bottom) break;

    for (int j = right; j >= left; j--) {
      res[idx++] = matrix[bottom][j];
    }
    bottom--;

    for (int i = bottom; i >= top; i--) {
      res[idx++] = matrix[i][left];
    }
    left++;
  }
  *returnSize = idx;
  return res;
}