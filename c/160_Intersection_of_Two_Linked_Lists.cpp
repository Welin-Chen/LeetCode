#include <iostream>
using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
 public:
  ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    ListNode* a = headA;
    ListNode* b = headB;

    while (a != b) {
      a = a ? a->next : headA;
      b = b ? b->next : headB;
    }
    return a;
  }
};

int main(int argc, char const* argv[]) {
  // Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA
  // = 2, skipB = 3 Output: Intersected at '8'

  Solution s;
  ListNode* headA = new ListNode(4);
  headA->next = new ListNode(1);
  headA->next->next = new ListNode(8);
  headA->next->next->next = new ListNode(4);
  headA->next->next->next->next = new ListNode(5);

  ListNode* headB = new ListNode(5);
  headB->next = new ListNode(6);
  headB->next->next = new ListNode(1);
  headB->next->next->next = headA->next->next;

  ListNode* res = s.getIntersectionNode(headA, headB);
  cout << res->val << endl;

  return 0;
}
