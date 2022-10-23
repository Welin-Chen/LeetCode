#include <iostream>
#include <vector>

using namespace std;
int solution(vector<int>& S) {
  int max_sum = 0;
  int current_sum = 0;
  int positive = 0;
  for (size_t i = 0; i < S.size(); ++i) {
    int item = S[i];
    if (item < 0) {
      if (max_sum < current_sum) {
        max_sum = current_sum;
        current_sum = 0;
      }
    } else {
      positive = 1;
      current_sum += item;
    }
  }
  if (current_sum > max_sum) {
    max_sum = current_sum;
  }
  if (positive) {
    return max_sum;
  }
  return -1;
}

int main(int argc, char const* argv[]) {
  vector<int> a = {1, 2, -3, 4, 5, -6};
  //   vector<int> a = {1, 0, 2, -3, 5, -6, 2, 10};
  //   vector<int> a = {0, -1, 0};
  cout << solution(a) << endl;
  return 0;
}
