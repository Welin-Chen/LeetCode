#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *decodeString(char *s) {
  char *ret = calloc(300 * 30, sizeof(char));
  int slen = strlen(s);
  int retIdx = 0;
  int arrNum[15] = {0};
  int arrNumIdx = 0;
  int arrStr[15] = {0};
  int arrStrIdx = 0;

  for (int i = 0; i < slen; i++) {
    if (s[i] <= '9' && s[i] >= '0') {
      arrNum[arrNumIdx] = arrNum[arrNumIdx] * 10 + (s[i] - '0');
    } else if (s[i] <= 'z' && s[i] >= 'a') {
      ret[retIdx++] = s[i];
    } else if (s[i] == '[') {
      arrNumIdx++;
      arrStr[arrStrIdx++] = retIdx;
    } else if (s[i] == ']') {
      int right = retIdx;
      while (arrNum[arrNumIdx - 1] != 1) {
        for (int j = arrStr[arrStrIdx - 1]; j < right; j++) {
          ret[retIdx++] = ret[j];
        }
        arrNum[arrNumIdx - 1]--;
      }
      arrNumIdx--;
      arrStrIdx--;
      arrNum[arrNumIdx] = 0;
    }
  }
  return ret;
}

int main(int argc, char const *argv[]) {
  // "3[a]2[bc]"
  // "3[a2[c]]"

  printf("%s\n", decodeString("3[a]2[bc]"));
  printf("%s\n", decodeString("3[a2[c]]"));

  return 0;
}
