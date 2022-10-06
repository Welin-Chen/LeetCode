#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
    vector<int> res;
    vector<int> map(1001);

    for (auto n : nums1) {
      map[n] = map[n] ? map[n] + 1 : 1;
    }
    for (auto n : nums2) {
      if (map[n]) {
        res.push_back(n);
        map[n]--;
      }
    }
    return res;
  }
};

int main(int argc, char const* argv[]) {
  // Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2,2]
  vector<int> nums1 = {1, 2, 2, 1};
  vector<int> nums2 = {2, 2};
  Solution s;

  vector<int> a = s.intersect(nums1, nums2);

  for (int i = 0; i < a.size(); i++) {
    printf("%d,", a[i]);
  }
  return 0;
}
