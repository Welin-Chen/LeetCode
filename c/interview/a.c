// you can write to stdout for debugging purposes, e.g.
// printf("this is a debug message\n");
#include <stdio.h>

int solution(int A[], int N) {
  // write your code in C99 (gcc 6.2.0)
  int size = 1000000;
  int b[size];

  for (int i = 0; i < N; i++) {
    if (A[i] > 0) b[A[i]] = 1;
  }
  for (int i = 1; i < size; i++) {
    if (b[i] != 1) return i;
  }
  return -1;
}

int main(int argc, char const *argv[]) {
  int A[] = {1, 2, 3};
  printf("%d", solution(A, 3));
  return 0;
}
