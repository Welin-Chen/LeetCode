#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode* next;
};

struct ListNode* removeElements(struct ListNode* head, int val) {
  if (!head) return head;
  while (head && head->val == val) {
    head = head->next;
  }

  struct ListNode* cur = head;
  struct ListNode* prev = NULL;

  while (cur) {
    if (cur->val == val) {
      prev->next = cur->next;
    } else {
      prev = cur;
    }
    cur = cur->next;
  }
  return head;
}

int main(int argc, char const* argv[]) {
  // Input: head = [1,2,6,3,4,5,6], val = 6
  // Output: [1,2,3,4,5]

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 1;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 2;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 6;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 3;
  head->next->next->next->next =
      (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->next->val = 4;
  head->next->next->next->next->next =
      (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->next->next->val = 5;
  head->next->next->next->next->next->next =
      (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->next->next->next->val = 6;

  struct ListNode* newHead = removeElements(head, 6);

  while (newHead) {
    printf("%d\n", newHead->val);
    newHead = newHead->next;
  }

  return 0;
}
