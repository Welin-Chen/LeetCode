#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<vector<int>> fourSum(vector<int> &nums, int target) {
    vector<vector<int>> res;
    if (nums.size() < 4) return res;
    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size() - 3; i++) {
      if (i != 0 && nums[i] == nums[i - 1]) continue;
      for (int j = i + 1; j < nums.size() - 2; j++) {
        if (j != i + 1 && nums[j] == nums[j - 1]) continue;

        int left = j + 1;
        int right = nums.size() - 1;

        while (left < right) {
          long sum = (long)nums[i] + (long)nums[j] + (long)nums[left] +
                     (long)nums[right];

          if (sum == target) {
            res.push_back({nums[i], nums[j], nums[left], nums[right]});
            while (left + 1 < right && nums[left] == nums[left + 1]) left++;
            while (right - 1 > left && nums[right] == nums[right - 1]) right--;
            left++;
            right--;
          } else if (sum < target)
            left++;
          else
            right--;
        }
      }
    }
    return res;
  }
};

int main(int argc, char const *argv[]) {
  // Input: nums = [1,0,-1,0,-2,2], target = 0
  // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
  // vector<int> a = {1, 0, -1, 0, -2, 2};
  // int target = 0;

  vector<int> a = {2, 2, 2, 2, 2};
  int target = 8;

  // vector<int> a = {1000000000, 1000000000, 1000000000, 1000000000};
  // int target = 0;

  Solution s;

  vector<vector<int>> res = s.fourSum(a, target);

  cout << "[";
  for (int i = 0; i < res.size(); i++) {
    cout << "[";
    for (int j = 0; j < res[i].size(); j++) {
      cout << res[i][j] << (j == res[i].size() - 1 ? "" : ",");
    }
    cout << "]" << (i == res.size() - 1 ? "" : ",");
  }
  cout << "]" << endl;

  return 0;
}
