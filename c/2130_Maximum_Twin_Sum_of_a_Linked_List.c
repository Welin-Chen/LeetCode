#include <stdio.h>
#include <stdlib.h>

struct ListNode {
  int val;
  struct ListNode* next;
};

struct ListNode* findMid(struct ListNode* head) {
  struct ListNode* slow = head;
  struct ListNode* fast = head;

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

int pairSum(struct ListNode* head) {
  struct ListNode* mid = findMid(head);
  struct ListNode* midNext = reverse(mid);
  int max = 0;
  int sum = 0;

  while (midNext) {
    sum = head->val + midNext->val;
    if (sum > max) max = sum;
    head = head->next;
    midNext = midNext->next;
  }
  return max;
}

int main(int argc, char const* argv[]) {
  // Input: head = [5,4,2,1]
  // Output: 6
  struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->val = 5;
  head->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->val = 4;
  head->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->val = 2;
  head->next->next->next = (struct ListNode*)malloc(sizeof(struct ListNode));
  head->next->next->next->val = 1;

  printf("%d\n", pairSum(head));

  return 0;
}
