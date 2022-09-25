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

struct ListNode* findMid(struct ListNode* head) {
  struct ListNode* cur = head;
  struct ListNode* slow = head;
  struct ListNode* fast = head;

  while (fast && fast->next && fast->next->next) {
    fast = fast->next->next;
    slow = slow->next;
  }
  return slow;
}

struct ListNode* merge(struct ListNode* l, struct ListNode* r) {
  struct ListNode* cur = (struct ListNode*)malloc(sizeof(struct ListNode));
  struct ListNode* dummy = cur;

  while (l && r) {
    if (l->val < r->val) {
      cur->next = l;
      l = l->next;
    } else {
      cur->next = r;
      r = r->next;
    }
    cur = cur->next;
  }
  if (l) cur->next = l;
  if (r) cur->next = r;

  return dummy->next;
}

struct ListNode* sortList(struct ListNode* head) {
  if (!head || !head->next) return head;
  struct ListNode* mid = findMid(head);
  struct ListNode* head2 = mid->next;
  mid->next = NULL;

  struct ListNode* l = sortList(head);
  struct ListNode* r = sortList(head2);

  return merge(l, r);
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

  head = sortList(head);
  while (head) {
    printf("%d, ", head->val);
    head = head->next;
  }

  return 0;
}
