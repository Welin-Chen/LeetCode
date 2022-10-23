// you can use includes, for example:
// #include <algorithm>

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;
#include <iostream>
#include <map>
#include <vector>
using namespace std;

bool solution(int N, vector<int> &A, vector<int> &B) {
  // write your code in C++14 (g++ 6.2.0)
  //   map<int, int> map;
  //   for (int i = 0; i < A.size(); i++) {
  //     if (!map[A[i]]) map[A[i]] = B[i];
  //     else{

  //     }
  //   }

  //   for (auto m : map) {
  //     cout << m.first << "," << m.second << endl;
  //   }
  int j = 0;
  for (int i = 1; i <= N; i++) {
    j = 0;
    while (!(A[j] == i || B[j] == i)) {
      j++;
    }
    cout << j << endl;
    if (j == A.size()) return false;
  }
  return true;
}

int main(int argc, char const *argv[]) {
  //   vector<int> A = {1, 2, 4, 4, 3};
  //   vector<int> B = {2, 3, 1, 3, 1};
  //   int N = 4;

  vector<int> A = {1, 2, 1, 3};
  vector<int> B = {2, 4, 3, 4};
  int N = 4;
  cout << solution(N, A, B) << endl;
  return 0;
}
