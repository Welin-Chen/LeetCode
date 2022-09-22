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

void deleteNode(struct ListNode* node) {
  struct ListNode* t = node->next;
  node->val = t->val;
  node->next = t->next;
}

int main(int argc, char const* argv[]) {
  // Input: head = [4,5,1,9], node = 5
  // Output: [4,1,9]

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 4;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 5;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 1;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 9;

  deleteNode(head->next);
  while (head) {
    printf("%d, ", head->val);
    head = head->next;
  }

  return 0;
}
