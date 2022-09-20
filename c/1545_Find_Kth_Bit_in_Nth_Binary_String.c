#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// method 1: using string
// char findKthBit(int n, int k) {
//   char *s = calloc(pow(2, n), sizeof(char));
//   char *s2 = calloc(pow(2, n), sizeof(char));

//   s[0] = '0';

//   while (1) {
//     int len = strlen(s);
//     if (k <= len) return s[k - 1];

//     strcpy(s2, s);

//     for (int i = 0; i < len / 2; i++) {
//       char t = s2[i];
//       s2[i] = s2[len - 1 - i];
//       s2[len - 1 - i] = t;
//     }

//     for (int i = 0; i < len; i++) {
//       s2[i] = s2[i] == '0' ? '1' : '0';
//     }

//     strcat(s, "1");
//     strcat(s, s2);
//     // printf("%s,%s\n", s, s2);
//   }
//   return '0';
// }

char findKthBit(int n, int k) {
  int mid = pow(2, n - 1);

  if (n == 1 || k == 1) return '0';
  if (k == mid) return '1';
  if (k < mid) return findKthBit(n - 1, k);
  return findKthBit(n - 1, mid * 2 - k) == '0' ? '1' : '0';
}

int main(int argc, char const *argv[]) {
  //   Input: n = 4, k = 11
  // Output: "1"
  int n = 4, k = 11;
  // S1 = "0"
  // S2 = "011"
  // S3 = "0111001"
  // S4 = "011100110110001"

  printf("%c\n", findKthBit(4, 11));
  return 0;
}
