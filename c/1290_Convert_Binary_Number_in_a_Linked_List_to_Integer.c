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

int getDecimalValue(struct ListNode* head) {
  int n = 0;
  while (head) {
    n <<= 1;
    n |= head->val;
    head = head->next;
  }
  return n;
}

int main(int argc, char const* argv[]) {
  // Input: head = [1,0,1]
  // Output: 5

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 1;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 0;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 1;

  printf("%d\n", getDecimalValue(head));

  return 0;
}
