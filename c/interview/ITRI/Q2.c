#include <stdio.h>

int MyStrcmp(const char *s1, const char *s2) {
  int i = 0;
  while (s1[i] != '\0' && s2[i] != '\0') {
    if (s1[i] != s2[i]) return -1;
    i++;
  }

  if (s1[i] == '\0' && s2[i] == '\0')
    return 0;
  else
    return -1;
}

int main(int argc, char const *argv[]) {
  printf("%d\n", MyStrcmp("hello", "hello"));
  printf("%d\n", MyStrcmp("hello", "hello1"));
  return 0;
}
