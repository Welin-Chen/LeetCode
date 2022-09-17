#include <stdio.h>
#include <string.h>

int strlen0(char *s) {
  int i = 0;
  while (s[i]) i++;

  return i;
}

void strcpy0(char *s, char *input) {
  int i = 0;
  while (input[i]) {
    s[i] = input[i];
    i++;
  }
}

int main(int argc, char const *argv[]) {
  char s[100] = "fjieowf";
  printf("%s\n", s);

  printf("%d\n", strlen0(s));
  printf("%ld\n", strlen(s));

  //   strcpy(s, "hello world");
  strcpy0(s, "good night");
  printf("%s\n", s);

  return 0;
}
