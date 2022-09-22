#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode* next;
};

struct ListNode* getMid(struct ListNode* head) {
  struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
  dummy->next = head;

  struct ListNode* slow = dummy;
  struct ListNode* fast = dummy;

  while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
  }
  return slow;
}

struct ListNode* reverse(struct ListNode* head) {
  struct ListNode* cur = head;
  struct ListNode* prev = NULL;
  struct ListNode* temp;

  while (cur) {
    temp = cur->next;
    cur->next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

bool isPalindrome(struct ListNode* head) {
  // 1.getMid
  // 2.reverse

  struct ListNode* mid = getMid(head);
  struct ListNode* midNext = reverse(mid->next);

  while (midNext) {
    if (head->val != midNext->val) return false;
    head = head->next;
    midNext = midNext->next;
  }
  return true;
}

int main(int argc, char const* argv[]) {
  // Input: head = [1,2,2,1]
  // Output: true

  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 1;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 2;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 2;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 1;

  printf("%d\n", isPalindrome(head));
  return 0;
}
