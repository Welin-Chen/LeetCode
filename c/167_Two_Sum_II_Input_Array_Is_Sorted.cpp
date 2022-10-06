#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> twoSum(vector<int>& numbers, int target) {
    int l = 0;
    int r = numbers.size() - 1;

    while (l < r) {
      int sum = numbers[l] + numbers[r];
      if (sum == target)
        return {l + 1, r + 1};
      else if (sum > target)
        r--;
      else
        l++;
    }
    return {};
  }
};

int main(int argc, char const* argv[]) {
  //     Input: numbers = [2,7,11,15], target = 9
  // Output: [1,2]

  vector<int> numbers = {2, 7, 11, 15};
  int target = 9;
  Solution s;

  vector<int> a = s.twoSum(numbers, target);
  for (int i = 0; i < 2; i++) {
    printf("%d,", a[i]);
  }
  return 0;
}
