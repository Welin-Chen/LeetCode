#include <stdio.h>
#include <string.h>

char* removeStars(char* s) {
  int l = 0;
  int r = 0;
  int n = strlen(s);

  for (r; r < n; r++) {
    if (s[r] == '*')
      l--;
    else
      s[l++] = s[r];
  }

  s[l] = '\0';
  return s;
}