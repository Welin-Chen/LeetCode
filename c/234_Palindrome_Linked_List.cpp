#include <iostream>
using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {
 public:
  bool isPalindrome(ListNode* head) {
    // 1.getMid->slow,fast two pointer
    // 2.reverse

    ListNode* mid = getMid(head);
    ListNode* midNext = reverse(mid->next);

    while (midNext) {
      if (head->val != midNext->val) return false;
      head = head->next;
      midNext = midNext->next;
    }
    return true;
  }

  ListNode* getMid(ListNode* head) {
    ListNode* dummy = new ListNode(-1);
    dummy->next = head;

    ListNode* slow = dummy;
    ListNode* fast = dummy;

    while (fast && fast->next) {
      slow = slow->next;
      fast = fast->next->next;
    }
    return slow;
  }

  ListNode* reverse(ListNode* head) {
    ListNode* prev = NULL;
    ListNode* cur = head;
    ListNode* temp;

    while (cur) {
      temp = cur->next;
      cur->next = prev;
      prev = cur;
      cur = temp;
    }
    return prev;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [1,2,2,1]
  // Output: true

  Solution s;

  ListNode* head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(2);
  head->next->next->next = new ListNode(1);

  cout << s.isPalindrome(head) << endl;
  return 0;
}
