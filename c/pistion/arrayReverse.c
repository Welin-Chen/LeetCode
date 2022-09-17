#include <stdio.h>
#include <stdlib.h>

void arrayReverse(int *a, int n) {
  for (int i = 0; i < n / 2; i++) {
    int t = a[i];
    a[i] = a[n - i - 1];
    a[n - i - 1] = t;
  }
}

int main(int argc, char const *argv[]) {
  const int n = 10;
  int a[n] = {0};
  for (int i = 0; i < n; i++) a[i] = rand() % 100;
  for (int i = 0; i < n; i++) printf("%d, ", a[i]);
  printf("\n\n");

  arrayReverse(a, n);
  printf("\n\n");

  for (int i = 0; i < n; i++) printf("%d, ", a[i]);
  printf("\n\n");
  return 0;
}
