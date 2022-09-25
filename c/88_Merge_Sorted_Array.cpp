#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int end = m + n - 1;

    while (m > 0 || n > 0) {
      int x = m ? nums1[m - 1] : INT_MIN;
      int y = n ? nums2[n - 1] : INT_MIN;

      if (x > y) {
        nums1[end--] = x;
        m--;
      } else {
        nums1[end--] = y;
        n--;
      }
    }
  }
};

int main(int argc, char const* argv[]) {
  // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  // Output: [1,2,2,3,5,6]
  vector<int> nums1 = {1, 2, 3, 0, 0, 0};
  vector<int> nums2 = {2, 5, 6};
  int m = 3, n = 3;
  Solution s;

  s.merge(nums1, m, nums2, n);

  for (int i = 0; i < nums1.size(); i++) {
    printf("%d,", nums1[i]);
  }
  return 0;
}
