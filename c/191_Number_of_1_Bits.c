#include <stdint.h>
#include <stdio.h>

int hammingWeight(uint32_t n) {
  int ones = 0;
  while (n) {
    if (n & 1)
      ones++;
    n >>= 1;
  }
  return ones;
}

int main(int argc, char const *argv[]) {
  // Input: n = 00000000000000000000000000001011
  // Output: 3

  int n = 00000000000000000000000000001011;

  printf("%d\n", hammingWeight(n));
  return 0;
}
