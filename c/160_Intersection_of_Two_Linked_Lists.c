/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode *next;
};

struct ListNode *getIntersectionNode(struct ListNode *headA,
                                     struct ListNode *headB) {
  struct ListNode *a = headA;
  struct ListNode *b = headB;

  while (a != b) {
    a = a ? a->next : headA;
    b = b ? b->next : headB;
  }
  return a;
}

int main(int argc, char const *argv[]) {
  // Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA
  // = 2, skipB = 3 Output: Intersected at '8'

  struct ListNode *headA = (struct ListNode *)malloc(sizeof(struct ListNode));
  struct ListNode *headB = (struct ListNode *)malloc(sizeof(struct ListNode));

  headA->val = 4;
  headA->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  headA->next->val = 1;
  headA->next->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  headA->next->next->val = 8;
  headA->next->next->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  headA->next->next->next->val = 4;
  headA->next->next->next->next =
      (struct ListNode *)malloc(sizeof(struct ListNode));
  headA->next->next->next->next->val = 5;

  headB->val = 5;
  headB->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  headB->next->val = 6;
  headB->next->next = (struct ListNode *)malloc(sizeof(struct ListNode));
  headB->next->next->val = 1;
  headB->next->next->next = headA->next->next;

  struct ListNode *res = getIntersectionNode(headA, headB);
  printf("%d\n", res->val);

  return 0;
}
