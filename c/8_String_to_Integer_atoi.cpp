#include <iostream>
using namespace std;

class Solution {
 public:
  int myAtoi(string s) {
    int i = 0;
    int sign = 1;
    int res = 0;

    while (s[i] == ' ' && i < s.size()) i++;

    if (i == s.size()) return 0;

    if (s[i] == '+' || s[i] == '-') {
      sign = s[i] == '-' ? -1 : 1;
      i++;
    }

    while (i < s.size()) {
      char c = s[i];
      if (c < '0' || c > '9') return res;

      int digit = sign * (s[i] - '0');
      if (sign == 1 &&
          (res > INT_MAX / 10 || (res == INT_MAX / 10 && digit > INT_MAX % 10)))
        return INT_MAX;
      if (sign == -1 &&
          (res < INT_MIN / 10 || (res == INT_MIN / 10 && digit < INT_MIN % 10)))
        return INT_MIN;

      res = res * 10 + digit;
      i++;
    }
    return res;
  }
};

int main(int argc, char const *argv[]) {
  Solution s;

  cout << s.myAtoi("-42") << endl;

  return 0;
}
