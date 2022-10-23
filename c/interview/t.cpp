// you can use includes, for example:
// #include <algorithm>

// you can write to stdout for debugging purposes, e.g.
// cout << "this is a debug message" << endl;
#include <string.h>

#include <iostream>
#include <stack>
#include <vector>
using namespace std;

vector<string> split(const string &str, const string &pattern) {
  // const char* convert to char*
  char *strc = new char[strlen(str.c_str()) + 1];
  strcpy(strc, str.c_str());
  vector<string> resultVec;
  char *tmpStr = strtok(strc, pattern.c_str());
  while (tmpStr != NULL) {
    resultVec.push_back(string(tmpStr));
    tmpStr = strtok(NULL, pattern.c_str());
  }

  delete[] strc;

  return resultVec;
}

bool isNumeric(std::string const &str) {
  char *p;
  strtol(str.c_str(), &p, 10);
  return *p == 0;
}
int solution(string &S) {
  // write your code in C++14 (g++ 6.2.0)
  stack<int> st;
  int max = 1048575;
  vector<string> s2 = split(S, " ");

  for (unsigned int i = 0; i < s2.size(); i++) {
    auto c = s2[i];

    if (isNumeric(c)) {
      st.push(stoi(c));
    } else if (c == "+") {
      if (st.size() < 2) return -1;

      int n1 = st.top();
      st.pop();
      int n2 = st.top();
      st.pop();

      if (n1 + n2 > max) return -1;
      st.push(n1 + n2);
    } else if (c == "-") {
      if (st.size() < 2) return -1;

      int n1 = st.top();
      st.pop();
      int n2 = st.top();
      st.pop();

      if (n1 - n2 < 0) return -1;
      st.push(n1 - n2);
    } else if (c == "DUP") {
      st.push(st.top());
    } else if (c == "POP") {
      st.pop();
    }
  }

  return st.top();
}

// int solution(string &S) {
//   // write your code in C++14 (g++ 6.2.0)
//   stack<int> st;
//   int max = 1048575;
//   cout << S << endl;
//   vector<string> s2 = split(S, " ");

//   for (int i = 0; i < s2.size(); i++) {
//     auto c = s2[i];
//     cout << c << endl;
//     if (isNumeric(c)) {
//       int n = stoi(c);
//       st.push(n);
//     } else if (c == "+") {
//       if (st.size() < 2) return -1;

//       int n1 = st.top();
//       st.pop();
//       int n2 = st.top();
//       st.pop();
//       if (n1 + n2 > max) return -1;
//       st.push(n1 + n2);
//     } else if (c == "-") {
//       if (st.size() < 2) return -1;
//       int n1 = st.top();
//       st.pop();
//       int n2 = st.top();
//       st.pop();
//       if (n1 - n2 < 0) return -1;
//       st.push(n1 - n2);
//     } else if (c == "DUP") {
//       st.push(st.top());
//     } else if (c == "POP") {
//       st.pop();
//     }
//   }
//   cout << "-------------" << endl;
//   return st.top();

//   while (st.size() > 0) {
//     cout << st.top() << endl;
//     st.pop();
//   }
// }
int main(int argc, char const *argv[]) {
  // string S = "4 5 6 - 7 +";                   // 8
  string S = "13 DUP 4 POP 5 DUP + DUP + -";  // 7
  // string S = "5 6 + -";                       //-1
  // string S = "3 DUP 5 - -";    //-1
  // string S = "1048575 DUP +";  //-1

  cout << solution(S) << endl;

  return 0;
}
