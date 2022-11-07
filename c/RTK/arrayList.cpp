#include <iostream>
using namespace std;

struct Node {
  int val;
  Node* next;
  Node() : val(0), next(NULL) {}
  Node(int x) : val(x), next(NULL) {}
  Node(int x, Node* next) : val(x), next(next) {}
};

int main(int argc, char const* argv[]) {
  int a[4] = {2, 2, 4, 5};
  Node* head = new Node();
  Node* dummy = head;

  for (int i = 0; i < 4; i++) {
    head->next = new Node(a[i]);
    head = head->next;
    // cout << a[i] << endl;
  }

  head = dummy->next;
  while (head) {
    cout << head->val << endl;
    head = head->next;
  }
  head = dummy->next;

  return 0;
}
