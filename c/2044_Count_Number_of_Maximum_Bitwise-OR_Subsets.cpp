#include <iostream>
#include <vector>
using namespace std;

// 法1: dp
// class Solution {
//  public:
//   int countMaxOrSubsets(vector<int>& nums) {
//     int m = 1 << 17;
//     int max = 0;
//     vector<int> dp(m + 1), dp_old(m + 1);

//     dp[0] = 1;

//     for (int x : nums) {
//       dp_old = dp;

//       for (int val = 0; val <= max; val++) {
//         dp[val | x] += dp_old[val];
//       }
//       max |= x;
//     }

//     return dp[max];
//   }
// };

// dp[i][val]: how many subsets whose bitwise or == val using nums[0:i]

// dp[i][val] = ... dp[i-1][v1]+dp[i-1][v2]+...+dp[i-1][vk]

// dp[i-1][val] => dp[i][val] += dp[i-1][val]
//                 dp[i][val|x] += dp[i-1][val]

// 法二: recursion
class Solution {
 public:
  int cnt = 0;
  int countMaxOrSubsets(vector<int>& nums) {
    int max = 0;

    for (int x : nums) {
      max |= x;
    }
    subsets(nums, 0, 0, max);
    return cnt;
  }

  void subsets(vector<int>& nums, int i, int bitOr, int max) {
    if (i == nums.size()) return;
    if ((bitOr | nums[i]) == max) cnt++;

    subsets(nums, i + 1, bitOr, max);            // choose not or nums[i]
    subsets(nums, i + 1, bitOr | nums[i], max);  // choose or nums[i]
  }
};

int main(int argc, char const* argv[]) {
  // Input: nums = [3,2,1,5]
  // Output: 6

  Solution s;
  vector<int> nums = {3, 2, 1, 5};
  for (int i = 0; i < nums.size(); i++) {
    cout << nums[i] << ",";
  }

  cout << endl;
  cout << s.countMaxOrSubsets(nums);
  return 0;
}
