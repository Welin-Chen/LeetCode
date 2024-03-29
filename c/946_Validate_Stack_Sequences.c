#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

bool validateStackSequences(int* pushed, int pushedSize, int* popped,
                            int poppedSize) {
  int* stack = malloc(sizeof(int) * pushedSize);
  int n = 0;

  for (int i = 0, j = 0; i < pushedSize; i++) {
    stack[n++] = pushed[i];

    while (n > 0 && stack[n - 1] == popped[j]) {
      n--;
      j++;
    }
  }
  return n == 0;
}