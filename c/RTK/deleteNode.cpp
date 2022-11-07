#include <iostream>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
struct ListNode {
  int val;
  ListNode* next;
  ListNode() {}
  ListNode(int val) : val(val), next(NULL) {}
  ListNode(int val, ListNode* next) : val(val), next(next) {}
};

class Solution {
 public:
  void deleteNode(ListNode* node) {
    ListNode* next = node->next;
    node->val = next->val;
    node->next = next->next;
  }
};

int main(int argc, char const* argv[]) {
  // head = [4,5,1,9], node = 5
  ListNode* head = new ListNode(4);
  head->next = new ListNode(5);
  head->next->next = new ListNode(1);
  head->next->next->next = new ListNode(9);

  Solution s;
  s.deleteNode(head->next);

  while (head) {
    cout << head->val << ",";
    head = head->next;
  }

  return 0;
}
