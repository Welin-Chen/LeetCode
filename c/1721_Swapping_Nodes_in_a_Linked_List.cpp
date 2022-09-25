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
  ListNode* swapNodes(ListNode* head, int k) {
    ListNode* n1 = NULL;
    ListNode* n2 = NULL;
    int i = 1;

    for (ListNode* cur = head; cur != NULL; cur = cur->next, i++) {
      if (n2) n2 = n2->next;
      if (i == k) {
        n1 = cur;
        n2 = head;
      }
    }

    int t = n1->val;
    n1->val = n2->val;
    n2->val = t;

    return head;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [1,2,3,4,5], k = 2
  // Output: [1,4,3,2,5]
  Solution s;
  ListNode* head = new ListNode(1);

  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);

  int k = 2;
  ListNode* newHead = s.swapNodes(head, k);

  while (newHead) {
    cout << newHead->val << ", ";
    newHead = newHead->next;
  }

  return 0;
}
