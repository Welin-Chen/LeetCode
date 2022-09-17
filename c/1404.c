#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 轉10進制，overflow fail
// int numSteps(char *s) {
//   int res = 0;
//   long long n = strtol(s, NULL, 2);

//   while (n != 1) {
//     // printf("res=%d,n=%ld\n", res, n);
//     n = n % 2 == 0 ? n / 2 : n + 1;
//     res++;
//   }
//   return res;
// }

int numSteps(char *s) {
  int step = 0;
  int carry = 0;
  int n = strlen(s);

  for (int i = n - 1; i > 0; i--) {
    if (s[i] == '1' && carry == 0 || s[i] == '0' && carry == 1) {
      step++;  // add 1
      carry = 1;
    } else if (s[i] == '1' && carry == 1) {
      carry = 1;
    }
    step++;  // divide 2
  }
  if (s[0] == '1' && carry == 1) {
    step++;  // divide 2
  }
  return step;
}

int main(int argc, char const *argv[]) {
  // Input: s = "1101"
  // Output: 6
  //   char s[100] = "1101";
  //   char s[100] =
  //   "1111011110000011100000110001011011110010111001010111110001";
  char s[100] =
      "1111110011101010110011100100101110010100101110111010111110110010";
  printf("%s\n", s);
  printf("%d\n", numSteps(s));
  return 0;
}
