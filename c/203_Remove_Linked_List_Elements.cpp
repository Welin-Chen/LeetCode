/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
#include <iostream>
using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
 public:
  ListNode* removeElements(ListNode* head, int val) {
    if (!head) return head;
    while (head && head->val == val) {
      head = head->next;
    }

    ListNode* cur = head;
    ListNode* prev = NULL;

    while (cur) {
      if (cur->val == val)
        prev->next = cur->next;
      else
        prev = cur;

      cur = cur->next;
    }
    return head;
  }
};

int main(int argc, char const* argv[]) {
  //     Input: head = [1,2,6,3,4,5,6], val = 6
  // Output: [1,2,3,4,5]
  Solution s;

  ListNode* head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(6);
  head->next->next->next = new ListNode(3);
  head->next->next->next->next = new ListNode(4);
  head->next->next->next->next->next = new ListNode(5);
  head->next->next->next->next->next->next = new ListNode(6);
  ListNode* newHead = s.removeElements(head, 6);
  while (newHead) {
    cout << newHead->val << endl;
    newHead = newHead->next;
  }

  return 0;
}
