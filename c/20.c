#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool isValid(char *s) {
  int len = strlen(s);
  if (len % 2 != 0)
    return false;

  int n = len / 2;
  char *stack = malloc(n);
  int idx = 0;
  char c, top;

  for (int i = 0; i < len; i++) {
    c = s[i];
    if (c == '(' || c == '[' || c == '{') {
      if (idx == n)
        return false;
      else
        stack[idx++] = c;
    } else {
      if (idx == 0)
        return false;
      top = stack[idx - 1];
      if (top == '(' && c == ')' || top == '[' && c == ']' ||
          top == '{' && c == '}') {
        idx--;
      } else
        return false;
    }
  }
  return idx == 0;
}

int main(int argc, char const *argv[]) {
  //     Input: s = "()"
  // Output: true

  char s[100] = "([}}])";
  printf("%s\n", s);
  printf("%d\n", isValid(s));
  return 0;
}
