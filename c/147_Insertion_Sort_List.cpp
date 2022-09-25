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
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
 public:
  ListNode* insertionSortList(ListNode* head) {
    ListNode* dummy = new ListNode(-1);
    dummy->next = head;

    ListNode* cur = head;
    ListNode* temp = NULL;
    ListNode* prev = NULL;

    while (cur && cur->next) {
      if (cur->val > cur->next->val) {
        temp = cur->next;
        cur->next = cur->next->next;
        prev = dummy;

        while (temp->val > prev->next->val) {
          prev = prev->next;
        }

        temp->next = prev->next;
        prev->next = temp;
      } else {
        cur = cur->next;
      }
    }
    return dummy->next;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [4,2,1,3]
  // Output: [1,2,3,4]
  Solution s;
  struct ListNode* head = new ListNode(4);
  head->next = new ListNode(2);
  head->next->next = new ListNode(1);
  head->next->next->next = new ListNode(3);

  head = s.insertionSortList(head);

  while (head) {
    cout << head->val << ",";
    head = head->next;
  }

  return 0;
}
