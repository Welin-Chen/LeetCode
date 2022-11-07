#include <iostream>
using namespace std;

int main(int argc, char const *argv[]) {
  int a[5] = {1, 99, 3, 4, 10};
  int *p = (int *)(&a + 1);  // 往後+5個int(4bit)=20 跳到10後面

  cout << *(a + 1) << endl;
  cout << &a << endl;  // 0x309824f30+(16+4)=0x309824f44
  cout << &a + 1 << endl;
  cout << *(p - 1) << endl;  //-1*4bit(int)
  cout << *(p - 2) << endl;
  return 0;
}
