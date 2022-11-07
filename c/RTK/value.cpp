#include <iostream>
using namespace std;

int main(int argc, char const *argv[]) {
  // Q6: the value of v?
  unsigned long v1 = 0x00001111;
  unsigned long v2 = 0x00001212;
  //   v1=16^3+16^2+16^1+16^0=4369, 二進制1000100010001
  // v2= 16^3+2*16^2+16^1+2*16^0=4626, 二進制1001000010010
  // v2 =    1001000010010
  // ~v2=    0110111101101
  //  v1=    1000100010001
  // v1&~v2= 0000100000001
  // v2 =    1001000010010
  //   v|v2= 1001100010011=4883
  unsigned long v;
  v = v1 & (~v2);
  v = v | v2;

  cout << v << endl;  // 4883
  return 0;
}
