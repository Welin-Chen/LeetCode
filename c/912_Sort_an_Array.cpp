#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> sortArray(vector<int>& nums) {
    mergeSort(nums, 0, nums.size() - 1);
    return nums;
  }

  void mergeSort(vector<int>& a, int l, int r) {
    if (l >= r) return;

    int mid = (l + r) / 2;

    mergeSort(a, l, mid);
    mergeSort(a, mid + 1, r);

    merge(a, l, r, mid);
  }

  void merge(vector<int>& a, int l, int r, int mid) {
    int b[r - l + 1];
    int i = l;
    int j = mid + 1;
    int k = 0;

    while (i <= mid && j <= r) {
      b[k++] = a[i] < a[j] ? a[i++] : a[j++];
    }

    while (i <= mid) b[k++] = a[i++];
    while (j <= r) b[k++] = a[j++];

    for (i = l, k = 0; i <= r; i++) {
      a[i] = b[k++];
    }
  }
};

int main(int argc, char const* argv[]) {
  //     Input: nums = [5,2,3,1]
  // Output: [1,2,3,5]

  Solution s;
  vector<int> nums = {5, 2, 3, 1};

  s.sortArray(nums);

  for (int i = 0; i < nums.size(); i++) {
    cout << nums[i] << ",";
  }

  return 0;
}
