#include <iostream>
#include <string.h>
using namespace std;

class Solution {
public:
  uint32_t reverseBits(uint32_t n) {
    uint32_t m = 0;
    for (int i = 0; i < 32; i++) {
      m <<= 1;
      m |= (n & 1);
      n >>= 1;
    }
    return m;
  }
};

int main(int argc, char const *argv[]) {
  // Input: n = 00000010100101000001111010011100
  // Output:    964176192
  string str = "00000010100101000001111010011100";
  //   int n = 43261596;
  int n = stoi(str, 0, 2);

  Solution s;

  cout << n << "," << s.reverseBits(n) << endl;
  return 0;
}
