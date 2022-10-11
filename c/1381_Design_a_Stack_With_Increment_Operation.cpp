#include <iostream>
#include <vector>
using namespace std;

class CustomStack {
 public:
  vector<int> s;
  int max;

  CustomStack(int maxSize) { max = maxSize; }

  void push(int x) {
    if (s.size() < max) s.push_back(x);
  }

  int pop() {
    if (s.size() == 0) return -1;
    int a = s[s.size() - 1];
    s.pop_back();
    return a;
  }

  void increment(int k, int val) {
    if (k > s.size()) k = s.size();

    for (int i = 0; i < k; i++) {
      s[i] += val;
    }
  }
};
