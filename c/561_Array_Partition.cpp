#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  int arrayPairSum(vector<int>& nums) {
    int max = 0;

    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size(); i++) {
      if (i % 2 == 0) max += nums[i];
    }
    return max;
  }
};

int main(int argc, char const* argv[]) {
  Solution s;
  vector<int> nums = {1, 4, 3, 2};
  cout << s.arrayPairSum(nums) << endl;
  return 0;
}
