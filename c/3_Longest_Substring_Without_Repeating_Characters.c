#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
  // sliding window (2 pointer)
  if (!strlen(s)) return 0;

  int a[256];
  int len = 0;
  int start = 0;

  for (int i = 0; i < 256; i++) a[i] = -1;

  for (int i = 0; i < strlen(s); i++) {
    int c = s[i];

    if (a[c] != -1) {
      if (a[c] + 1 > start) start = a[c] + 1;
    }
    if (i - start + 1 > len) len = i - start + 1;
    a[c] = i;
  }
  return len;
}

int main(int argc, char const* argv[]) {
  //     Input: s = "abcabcbb"
  // Output: 3
  char* s = "abcabcbb";
  printf("%s,len=%d\n", s, lengthOfLongestSubstring(s));

  return 0;
}
