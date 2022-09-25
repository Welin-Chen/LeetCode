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
  struct ListNode* next;
};

struct ListNode* swapNodes(struct ListNode* head, int k) {
  struct ListNode* cur = head;
  struct ListNode* n1 = NULL;
  struct ListNode* n2 = NULL;
  int i = 1;

  for (cur; cur != NULL; cur = cur->next, i++) {
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

int main(int argc, char const* argv[]) {
  // Input: head = [1,2,3,4,5], k = 2
  // Output: [1,4,3,2,5]

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 1;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 2;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 3;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 4;
  head->next->next->next->next =
      (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->next->val = 5;

  struct ListNode* newHead = swapNodes(head, 2);
  while (newHead) {
    printf("%d, ", newHead->val);
    newHead = newHead->next;
  }
  return 0;
}
