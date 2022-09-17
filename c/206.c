#include <stdio.h>
#include <stdlib.h>
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode {
  int val;
  struct ListNode* next;
};

struct ListNode* reverseList(struct ListNode* head) {
  struct ListNode* prev = NULL;

  while (head) {
    struct ListNode* temp = head->next;

    head->next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};

int main(int argc, char const* argv[]) {
  struct ListNode* head = malloc(sizeof(struct ListNode));
  head->val = 1;
  head->next = malloc(sizeof(struct ListNode));
  head->next->val = 2;
  head->next->next = malloc(sizeof(struct ListNode));
  head->next->next->val = 3;
  head->next->next->next = malloc(sizeof(struct ListNode));
  head->next->next->next->val = 4;
  head->next->next->next->next = malloc(sizeof(struct ListNode));
  head->next->next->next->next->val = 5;
  struct ListNode* newHead = reverseList(head);

  while (newHead) {
    printf("%d, ", newHead->val);
    newHead = newHead->next;
  }

  return 0;
}
