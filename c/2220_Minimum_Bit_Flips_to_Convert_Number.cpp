#include <iostream>
using namespace std;

// method 1:
class Solution {
public:
  int minBitFlips(int start, int goal) {
    int cnt = 0;

    while (goal != start) {
      if ((start & 1) != (goal & 1)) {
        cnt++;
      }
      start >>= 1;
      goal >>= 1;
    }
    return cnt;
  }
};

// method 2
// class Solution {
// public:
//   int minBitFlips(int start, int goal) {
//     return __builtin_popcount(start ^ goal);
//   }
// };

int main(int argc, char const *argv[]) {
  // Input: start = 10, goal = 7
  // Output: 3

  Solution s;
  int start = 10, goal = 7;
  cout << s.minBitFlips(start, goal) << endl;
  return 0;
};
