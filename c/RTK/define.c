#include <stdio.h>
#define min(a, b) (a > b ? a : b)

int main(int argc, char const *argv[]) {
  printf("%d\n", min(2, -4));
  return 0;
}
