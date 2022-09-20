#include <math.h>
#include <string.h>

#include <algorithm>
#include <iostream>
using namespace std;

// method 1. using string
// class Solution {
//  public:
//   char findKthBit(int n, int k) {
//     string s = "0";

//     while (1) {
//       int n = s.size();

//       if (k <= n) return s[k - 1];

//       auto s2 = s;
//       for (int i = 0; i < n / 2; i++) {
//         char t = s2[i];
//         s2[i] = s2[n - 1 - i];
//         s2[n - 1 - i] = t;
//       }

//       for (int i = 0; i < n; i++) {
//         s2[i] = s2[i] == '0' ? '1' : '0';
//       }

//       s = s + "1" + s2;
//     }
//     return '0';
//   }
// };

// method 2
class Solution {
 public:
  char findKthBit(int n, int k) {
    int mid = pow(2, n - 1);
    if (k == 1 || n == 1) return '0';
    if (k == mid) return '1';
    if (k < mid) return findKthBit(n - 1, k);
    return findKthBit(n - 1, mid * 2 - k) == '0' ? '1' : '0';
  };
};

int main(int argc, char const *argv[]) {
  // Input: n = 3, k = 1
  // Output: "0"
  Solution s;
  //   int n = 4, k = 11;
  int n = 4, k = 12;
  //   0
  //   011
  //   0111001
  //   011100110110001

  cout << s.findKthBit(n, k) << endl;

  return 0;
}
