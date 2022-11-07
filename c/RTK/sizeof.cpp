#include <iostream>
#include <string>
using namespace std;

int main(int argc, char const *argv[]) {
  // - [ ]  4. char *s = “hello”; char s1[]={‘h’,’e’,’l’,’l’,’o’}; int
  // s2[]={‘h’,’e’,’l’,’l’,’o’}; 分別求 sizeof(s), sizeof(s1), sizeof(s2)
  char *s = "hello";
  char s1[] = {'h', 'e', 'l', 'l', 'o'};
  int s2[] = {'h', 'e', 'l', 'l', 'o'};

  cout << sizeof(s) << endl;   // 8, s is pointer, pointer =8 bits
  cout << sizeof(*s) << endl;  // 1, 第一個char=1bits;
  cout << sizeof(s1) << endl;  // 5*1, char=1bits
  cout << sizeof(s2) << endl;  // 5*4, int=4bits
  //   分別求 sizeof(s), sizeof(s1), sizeof(s2)
  return 0;
}
