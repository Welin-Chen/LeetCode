#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    vector<int> map(1000);
    vector<int> res;

    for (int i = 0; i < nums1.size(); i++) {
      map[nums1[i]] = 1;
    }
    for (int i = 0; i < nums2.size(); i++) {
      if (map[nums2[i]]) {
        res.push_back(nums2[i]);
        map[nums2[i]] = 0;
      }
    }

    return res;
  }
};

int main(int argc, char const* argv[]) {
  //     Input: nums1 = [1,2,2,1], nums2 = [2,2]
  // Output: [2]
  vector<int> nums1 = {1, 2, 2, 1};
  vector<int> nums2 = {2, 2};
  Solution s;

  vector<int> a = s.intersection(nums1, nums2);

  for (int i = 0; i < a.size(); i++) {
    printf("%d,", a[i]);
  }

  return 0;
}
