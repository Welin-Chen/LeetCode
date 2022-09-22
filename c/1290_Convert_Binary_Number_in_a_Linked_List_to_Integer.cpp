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
  int getDecimalValue(ListNode* head) {
    int n = 0;
    while (head) {
      n <<= 1;
      n |= head->val;
      head = head->next;
    }
    return n;
  }
};

int main(int argc, char const* argv[]) {
  // Input: head = [1,0,1]
  // Output: 5

  Solution s;
  ListNode* head = new ListNode(1);
  head->next = new ListNode(0);
  head->next->next = new ListNode(1);

  cout << s.getDecimalValue(head) << endl;
  return 0;
}
