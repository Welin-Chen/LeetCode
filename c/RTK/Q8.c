#include <stdio.h>

int main(int argc, char const *argv[]) {
  int a[5] = {1, 99, 3, 4, 10};
  int *p = (int *)(&a + 1);

  printf("%d\n", *(a + 1));
  printf("%d\n", *(p + 1));
  return 0;
}
