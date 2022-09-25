#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode* next;
};

struct ListNode* insertionSortList(struct ListNode* head) {
  struct ListNode* cur = head;
  struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
  dummy->val = -1;
  dummy->next = head;

  struct ListNode* temp = NULL;
  struct ListNode* prev = NULL;

  while (cur && cur->next) {
    if (cur->val < cur->next->val) {
      cur = cur->next;
    } else {
      temp = cur->next;
      cur->next = cur->next->next;

      prev = dummy;

      while (temp->val > prev->next->val) {
        prev = prev->next;
      }
      temp->next = prev->next;
      prev->next = temp;
    }
  }
  return dummy->next;
}

int main(int argc, char const* argv[]) {
  // Input: head = [4,2,1,3]
  // Output: [1,2,3,4]

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 4;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 2;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 1;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 3;

  head = insertionSortList(head);

  while (head) {
    printf("%d, ", head->val);
    head = head->next;
  }

  return 0;
}
