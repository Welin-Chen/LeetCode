#include <iostream>
#include <stack>
using namespace std;

class Solution {
 public:
  stack<int> st;

  string removeStars(string s) {
    for (auto c : s) {
      if (c == '*')
        st.pop();
      else
        st.push(c);
    }

    string res(st.size(), '*');
    int n = st.size() - 1;
    while (st.size() > 0) {
      res[n--] = st.top();
      st.pop();
    }
    return res;
  }
};