#include <cstdlib>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<int> sortByBits(vector<int>& arr) {
    sort(arr.begin(), arr.end(), cmp);
    return arr;
  }

  static bool cmp(int a, int b) {
    int vA = a;
    int vB = b;

    int bitA = 0;
    int bitB = 0;

    while (vA) {
      if (vA & 1) bitA++;
      vA >>= 1;
    }

    while (vB) {
      if (vB & 1) bitB++;
      vB >>= 1;
    }

    if (bitA != bitB) return bitA < bitB;
    return a < b;
  }
};

int main(int argc, char const* argv[]) {
  // Input: arr = [0,1,2,3,4,5,6,7,8]
  // Output: [0,1,2,4,8,3,5,6,7]

  Solution s;
  vector<int> arr = {0, 1, 2, 3, 4, 5, 6, 7, 8};
  s.sortByBits(arr);

  for (int i = 0; i < arr.size(); i++) {
    cout << arr[i] << ',';
  }
  cout << endl;

  return 0;
}
