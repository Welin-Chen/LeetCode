// you can use includes, for example:
// #include <algorithm>

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;
#include <iostream>
#include <vector>
using namespace std;

int solution(vector<int> &A) {
  // write your code in C++14 (g++ 6.2.0)
  vector<int> b(1000000, 0);

  for (int i = 0; i < A.size(); i++) {
    if (A[i] > 0) b[A[i]] = 1;
  }
  for (int i = 1; i <= b.size(); i++) {
    if (b[i] != 1) return i;
  }
  return -1;
}

int main(int argc, char const *argv[]) {
  vector<int> A = {-1, -3};
  cout << solution(A);

  return 0;
}
