#include <stdbool.h>
#include <stdio.h>

bool isOneBitCharacter(int* bits, int bitsSize) {
  int idx = 0;

  while (idx < bitsSize) {
    if (bits[idx] == 0 && idx == bitsSize - 1)
      return true;
    else if (bits[idx] == 0)
      idx += 1;
    else if (bits[idx] == 1)
      idx += 2;
  }
  return false;
}

int main(int argc, char const* argv[]) {
  // Input: bits = [1,0,0]
  // Output: true
  int bits[] = {1, 0, 0};
  int n = sizeof(bits) / sizeof(bits[0]);

  printf("%d\n", isOneBitCharacter(bits, n));
  return 0;
}
