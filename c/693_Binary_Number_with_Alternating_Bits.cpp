#include <iostream>
using namespace std;

class Solution {
public:
  bool hasAlternatingBits(int n) {
    while (n) {
      bool prev = n & 1;
      n >>= 1;
      if ((n & 1) == prev)
        return false;
    }
    return true;
  }
};

int main(int argc, char const *argv[]) {
  Solution s;

  int n = 5;
  cout << n << "," << s.hasAlternatingBits(n) << endl;
  return 0;
}
