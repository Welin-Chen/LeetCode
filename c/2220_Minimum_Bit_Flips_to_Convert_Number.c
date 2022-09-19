#include <stdio.h>

// method 1:
// int minBitFlips(int start, int goal) {
//   int cnt = 0;
//   while (start != goal) {
//     if ((start & 1) != (goal & 1))
//       cnt++;
//     start >>= 1;
//     goal >>= 1;
//   }
//   return cnt;
// }

// method 2:
int minBitFlips(int start, int goal) {
  int cnt = 0;
  int xor = start ^ goal;
  while (xor) {
    if (xor&1)
      cnt++;
    xor >>= 1;
  }
  return cnt;
}

int main(int argc, char const *argv[]) {
  // Input: start = 10, goal = 7
  // Output: 3

  int start = 10, goal = 7;

  printf("%d\n", minBitFlips(start, goal));
  return 0;
}
