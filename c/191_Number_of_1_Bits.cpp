#include <iostream>
using namespace std;

class Solution {
public:
  int hammingWeight(uint32_t n) {
    int ones = 0;
    while (n) {
      if (n & 1)
        ones++;
      n >>= 1;
    }
    return ones;
  }
};

int main(int argc, char const *argv[]) {
  Solution s;
  int n = 00000000000000000000000000001011;

  cout << n << "," << s.hammingWeight(n);
  return 0;
}
