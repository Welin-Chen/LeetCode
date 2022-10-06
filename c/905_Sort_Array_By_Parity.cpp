#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> sortArrayByParity(vector<int>& nums) {
    int l = 0;
    int r = nums.size() - 1;
    int t;

    while (l < r) {
      if (nums[l] % 2 == 1 && nums[r] % 2 == 0) {
        t = nums[l];
        nums[l] = nums[r];
        nums[r] = t;
      }
      if (nums[l] % 2 == 0) l++;
      if (nums[r] % 2 == 1) r--;
    }
    return nums;
  }
};
int main(int argc, char const* argv[]) {
  //   Input: nums = [3,1,2,4]
  // Output: [2,4,3,1]
  Solution s;
  vector<int> nums = {3, 1, 2, 4};
  s.sortArrayByParity(nums);

  for (int i = 0; i < nums.size(); i++) {
    printf("%d, ", nums[i]);
  }

  return 0;
}
