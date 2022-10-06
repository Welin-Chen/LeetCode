#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> productExceptSelf(vector<int>& nums) {
    vector<int> l(nums.size(), 1);

    for (int i = 1; i < nums.size(); i++) {
      l[i] = l[i - 1] * nums[i - 1];
    }

    int r = 1;
    for (int i = nums.size() - 1; i >= 0; i--) {
      l[i] *= r;
      r = r * nums[i];
    }
    return l;
  }
};

int main(int argc, char const* argv[]) {
  // Input: nums = [1,2,3,4]
  // Output: [24,12,8,6]
  vector<int> nums = {1, 2, 3, 4};
  Solution s;
  vector<int> res = s.productExceptSelf(nums);
  for (int i = 0; i < res.size(); i++) {
    printf("%d,", res[i]);
  }
  return 0;
}
