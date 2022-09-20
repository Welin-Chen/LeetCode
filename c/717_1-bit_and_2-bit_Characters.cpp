// #include <iostream>
// #include <vector>
// using namespace std;
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  bool isOneBitCharacter(vector<int> &bits) {
    int n = bits.size();
    int idx = 0;

    while (idx < n) {
      if (bits[idx] == 0 && idx == n - 1)
        return true;
      if (bits[idx] == 0)
        idx += 1;
      if (bits[idx] == 1)
        idx += 2;
    }
    return false;
  }
};

int main(int argc, char const *argv[]) {
  // Input: bits = [1,0,0]
  // Output: true
  Solution s;
  // vector<int> bits = {1, 0, 0};
  vector<int> bits = {0, 0, 0};

  cout << s.isOneBitCharacter(bits) << endl;

  return 0;
}
