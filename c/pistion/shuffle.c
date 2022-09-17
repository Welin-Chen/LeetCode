#include <stdio.h>
#include <stdlib.h>

void shuffle(int *a, int n) {
  if (n > 1) {
    for (int i = 0; i < n; i++) {
      int j = rand() % (n - 1);
      int t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
  }
}

int main(int argc, char const *argv[]) {
  const int n = 5;
  int a[n] = {0};
  for (int i = 0; i < n; i++) a[i] = rand() % 100;
  for (int i = 0; i < n; i++) printf("%d, ", a[i]);
  printf("\n\n");

  shuffle(a, n);
  for (int i = 0; i < n; i++) printf("%d, ", a[i]);
  printf("\n\n");

  return 0;
}
