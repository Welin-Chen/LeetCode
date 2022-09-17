/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

// 法1
// int* countBits(int n, int* returnSize) {
//   int* arr = malloc(sizeof(int) * (n + 1));
//   *returnSize = n + 1;

//   for (int i = 0; i <= n; i++) {
//     int ones = 0;
//     int x = i;
//     while (x) {
//       if (x & 1) ones++;
//       x >>= 1;
//     }
//     arr[i] = ones;
//   }
//   return arr;
// }

// 法2 dp
int *countBits(int n, int *returnSize) {
  int *dp = malloc(sizeof(int) * (n + 1));
  *returnSize = n + 1;

  dp[0] = 0;
  for (int i = 1; i <= n; i++) {
    dp[i] = i & 1 ? dp[i >> 1] + 1 : dp[i >> 1];
  }
  return dp;
}

int main(int argc, char const *argv[]) {
  // Input: n = 2
  // Output: [0,1,1]
  // Explanation:
  // 0 --> 0
  // 1 --> 1
  // 2 --> 10

  // Input: n = 5
  // Output: [0,1,1,2,1,2]

  const int n = 5;
  int a[n + 1] = {0};
  int *b = countBits(n, a);

  for (int i = 0; i <= n; i++) {
    printf("%d, ", b[i]);
  }
  free(b);
  return 0;
}
