#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<string> buildArray(vector<int>& target, int n) {
    vector<string> a;
    int j = 1;
    int i = 0;

    while (i < target.size()) {
      a.push_back("Push");

      if (j++ == target[i])
        i++;
      else
        a.push_back("Pop");
    }
    return a;
  }
};