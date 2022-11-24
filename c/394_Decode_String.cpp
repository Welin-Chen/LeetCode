#include <string.h>

#include <iostream>
#include <stack>
using namespace std;

// class Solution {
//  public:
//   string decodeString(string s) {
//     string res = "";
//     stack<int> st_n;
//     stack<string> st_s;
//     int n = 0;

//     for (char c : s) {
//       if (c == '[') {
//         st_n.push(n);
//         st_s.push(res);
//         n = 0;
//         res = "";
//       } else if (c == ']') {
//         int n0 = st_n.top();
//         string res0 = st_s.top();

//         st_n.pop();
//         st_s.pop();

//         string temp = res;

//         res = res0 + res;
//         for (int i = 1; i < n0; i++) {
//           res += temp;
//         }
//       } else if (isdigit(c)) {
//         n = n * 10 + c - '0';
//       } else {
//         res += c;
//       }
//     }
//     return res;
//   }
// };

class Solution {
 public:
  int i = 0;
  string decodeString(string s) {
    string res;
    int cnt = 0;

    while (i < s.length()) {
      char c = s[i];
      i++;

      if (isalpha(c)) {
        res += c;
      } else if (isdigit(c)) {
        cnt = cnt * 10 + (c - '0');
      } else if (c == '[') {
        string str = decodeString(s);

        for (int j = 0; j < cnt; j++) {
          res += str;
        }
        cnt = 0;
      } else if (c == ']') {
        return res;
      }
    }

    i = 0;
    return res;
  }
};
int main(int argc, char const *argv[]) {
  Solution s;
  cout << s.decodeString("3[a]2[bc]") << endl;
  cout << s.decodeString("3[a2[c]]") << endl;
  return 0;
}
