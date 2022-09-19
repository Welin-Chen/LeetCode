#include <iostream>
using namespace std;

class Solution {
 public:
  int rangeBitwiseAnd(int left, int right) {
    int cnt = 0;

    while (left != right) {
      left >>= 1;
      right >>= 1;
      cnt++;
    }
    return left << cnt;
  }
};

int main(int argc, char const *argv[]) {
  //     Input: left = 5, right = 7
  // Output: 4
  // 1000->100->10
  // 1001->100->10
  // 1011->101->10
  // cnt+1+1=2->1000

  Solution s;
  int left = 5, right = 7;
  cout << s.rangeBitwiseAnd(left, right) << endl;
  return 0;
}
