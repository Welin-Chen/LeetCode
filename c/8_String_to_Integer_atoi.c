#include <limits.h>
#include <stdio.h>

int myAtoi(char *s) {
  int i = 0;
  int sign = 1;
  int res = 0;

  while (s[i] != '\0' && s[i] == ' ') i++;

  if (s[i] == '\0') return 0;

  if (s[i] == '+' || s[i] == '-') {
    sign = s[i] == '-' ? -1 : 1;
    i++;
  }

  while (s[i] != '\0') {
    char c = s[i];
    if (c < '0' || c > '9') return res;

    int digit = sign * (c - '0');
    if (res > INT_MAX / 10 || (res == INT_MAX / 10 && digit > INT_MAX % 10))
      return INT_MAX;
    if (res < INT_MIN / 10 || (res == INT_MIN / 10 && digit < INT_MIN % 10))
      return INT_MIN;

    res = res * 10 + digit;
    i++;
  }
  return res;
}

int main(int argc, char const *argv[]) {
  printf("%d\n", myAtoi("-42"));
  return 0;
}
