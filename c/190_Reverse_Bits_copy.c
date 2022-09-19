#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

uint32_t reverseBits(uint32_t n) {
  uint32_t res = 0;
  for (int i = 0; i < 32; i++) {
    res <<= 1;
    res |= n & 1;
    n >>= 1;
  }
  return res;
}

int main(int argc, char const *argv[]) {
  // Input: n = 00000010100101000001111010011100
  // Output:    964176192

  char n0[100] = "00000010100101000001111010011100";
  printf("n(2進位) = %s\n", n0);

  // uint32_t n = 43261596;
  uint32_t n = strtol(n0, NULL, 2);
  printf("n(10進位) = %d\n", n);
  printf("reverse n(2進位) = %d\n", reverseBits(n));

  return 0;
}
