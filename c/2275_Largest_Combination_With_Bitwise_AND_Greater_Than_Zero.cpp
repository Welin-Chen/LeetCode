#include <math.h>

#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  int largestCombination(vector<int>& nums) {
    int ret = 0;
    for (int i = 0; i < 24; i++) {
      int cnt = 0;
      for (int n : nums) {
        if (n & (1 << i)) cnt++;
      }
      ret = max(ret, cnt);
    }
    return ret;
  }
};

int main(int argc, char const* argv[]) {
  // Input: candidates = [16,17,71,62,12,24,14]
  // Output: 4
  vector<int> candidates = {16, 17, 71, 62, 12, 24, 14};
  Solution s;
  cout << s.largestCombination(candidates) << endl;

  return 0;
}
