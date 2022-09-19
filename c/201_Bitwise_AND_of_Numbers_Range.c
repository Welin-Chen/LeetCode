#include <stdio.h>

int rangeBitwiseAnd(int left, int right) {
  int cnt = 0;
  while (left != right) {
    left >>= 1;
    right >>= 1;
    cnt++;
  }
  return left << cnt;
}

int main(int argc, char const *argv[]) {
  // Input: left = 5, right = 7
  // Output: 4
  int left = 5, right = 7;

  printf("%d\n", rangeBitwiseAnd(left, right));

  return 0;
}
