#include <iostream>
#include <queue>
using namespace std;

class MyStack {
 public:
  queue<int> que;
  MyStack() {}

  void push(int x) {
    que.push(x);
    for (int i = 0; i < que.size() - 1; i++) {
      que.push(que.front());
      que.pop();
    }
  }

  int pop() {
    int a = que.front();
    que.pop();
    return a;
  }

  int top() { return que.front(); }

  bool empty() { return que.empty(); }
};

int main(int argc, char const* argv[]) {
  // Input
  // ["MyStack", "push", "push", "top", "pop", "empty"]
  // [[], [1], [2], [], [], []]
  // Output
  // [null, null, null, 2, 2, false]

  MyStack stack;
  stack.push(1);
  stack.push(2);
  cout << stack.top() << endl;
  cout << stack.pop() << endl;
  cout << stack.empty() << endl;

  return 0;
}
