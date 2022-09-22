/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode* next;
};

bool hasCycle(struct ListNode* head) {
  struct ListNode* slow = head;
  struct ListNode* fast = head;

  while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) return true;
  }
  return false;
}

int main(int argc, char const* argv[]) {
  // Input: head = [3,2,0,-4], pos = 1
  // Output: true

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 3;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 3;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 0;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = -4;
  head->next->next->next = head->next;

  printf("%d\n", hasCycle(head));

  return 0;
}
