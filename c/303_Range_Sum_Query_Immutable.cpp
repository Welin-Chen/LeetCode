#include <iostream>
#include <vector>
using namespace std;

class NumArray {
 public:
  vector<int> v;
  NumArray(vector<int>& nums) {
    v.push_back(nums[0]);

    for (int i = 1; i < nums.size(); i++) {
      v.push_back(v[i - 1] + nums[i]);
    }
  }

  int sumRange(int i, int j) {
    if (i == 0) return v[j];
    return v[j] - v[i - 1];
  }
};