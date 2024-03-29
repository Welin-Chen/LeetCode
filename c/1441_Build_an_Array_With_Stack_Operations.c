#include <stdio.h>
#include <stdlib.h>

char** buildArray(int* target, int targetSize, int n, int* returnSize) {
  char** a = malloc(sizeof(char*) * n * 2);
  int i = 0;
  int j = 1;
  int size = 0;

  while (i < targetSize) {
    a[size++] = "Push";
    if (j++ == target[i])
      i++;
    else
      a[size++] = "Pop";
  }
  *returnSize = size;
  return a;
}