#include <stdbool.h>
#include <stdio.h>

bool hasAlternatingBits(int n) {
  while (n) {
    bool prev = n & 1;
    n >>= 1;
    if ((n & 1) == prev)
      return false;
  }
  return true;
}

int main(int argc, char const *argv[]) {
  // Input: n = 5
  // Output: true

  int n = 5;
  printf("%d\n", hasAlternatingBits(n));
  return 0;
}
