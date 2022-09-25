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
  ListNode* sortList(ListNode* head) {
    if (!head || !head->next) return head;

    ListNode* mid = findMid(head);
    ListNode* head2 = mid->next;
    mid->next = NULL;

    ListNode* l = sortList(head);
    ListNode* r = sortList(head2);

    return merge(l, r);
  }

  ListNode* merge(ListNode* l, ListNode* r) {
    ListNode* dummy = new ListNode(-1);
    ListNode* cur = dummy;

    while (l && r) {
      if (l->val < r->val) {
        cur->next = l;
        l = l->next;
      } else {
        cur->next = r;
        r = r->next;
      }
      cur = cur->next;
    }

    if (l) cur->next = l;
    if (r) cur->next = r;

    return dummy->next;
  }

  ListNode* findMid(ListNode* head) {
    //         fast and slow pointer
    ListNode* cur = head;
    ListNode* fast = head;
    ListNode* slow = head;

    while (fast && fast->next && fast->next->next) {
      fast = fast->next->next;
      slow = slow->next;
    }
    return slow;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [4,2,1,3]
  // Output: [1,2,3,4]

  Solution s;
  ListNode* head = new ListNode(4);
  head->next = new ListNode(2);
  head->next->next = new ListNode(1);
  head->next->next->next = new ListNode(3);

  head = s.sortList(head);
  while (head) {
    cout << head->val << ", ";
    head = head->next;
  }

  return 0;
}
