#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> countBits(int n) {
    vector<int> dp(n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
      dp[i] = (i & 1) + dp[i >> 1];

    return dp;
  }
};

int main(int argc, char const *argv[]) {
  Solution s;
  int n = 5;
  vector<int> res = s.countBits(n);
  for (int i = 0; i <= 5; i++)
    cout << res[i] << ",";
  cout << endl;

  return 0;
}
