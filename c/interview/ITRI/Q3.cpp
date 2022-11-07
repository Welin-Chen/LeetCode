#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> beautifulArray(int n) {
    vector<int> a;
    for (int i = 1; i <= n; i++) {
      a.push_back(i);
    }
    return a;
  };
};

int main(int argc, char const *argv[]) {
  Solution s;

  vector<int> a = s.beautifulArray(4);

  for (int i = 0; i < a.size(); i++) {
    cout << a[i] << endl;
  }

  return 0;
}
