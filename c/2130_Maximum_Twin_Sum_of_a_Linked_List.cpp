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
  int pairSum(ListNode* head) {
    ListNode* mid = findMid(head);
    ListNode* midNext = reverse(mid);
    int max = 0, sum = 0;

    while (midNext) {
      sum = head->val + midNext->val;
      if (sum > max) max = sum;
      head = head->next;
      midNext = midNext->next;
    }
    return max;
  }

  ListNode* findMid(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast && fast->next) {
      slow = slow->next;
      fast = fast->next->next;
    }

    return slow;
  }

  ListNode* reverse(ListNode* head) {
    ListNode* cur = head;
    ListNode* next;
    ListNode* prev = NULL;

    while (cur) {
      next = cur->next;
      cur->next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [5,4,2,1]
  // Output: 6
  Solution s;
  struct ListNode* head = new ListNode(5);
  head->next = new ListNode(4);
  head->next->next = new ListNode(2);
  head->next->next->next = new ListNode(1);
  cout << s.pairSum(head) << endl;

  return 0;
}
