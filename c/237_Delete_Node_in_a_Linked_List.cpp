/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
#include <iostream>
using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
 public:
  void deleteNode(ListNode* node) {
    ListNode* t = node->next;
    node->val = t->val;
    node->next = t->next;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [4,5,1,9], node = 5
  // Output: [4,1,9]

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
