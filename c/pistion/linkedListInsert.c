#include <stdio.h>
#include <stdlib.h>

struct node {
  int data;
  struct node* next;
};

void insert(struct node** head, int data_after, int data) {
  struct node* newNode = malloc(sizeof(struct node));
  struct node* prev;
  struct node* oldHead = *head;
  newNode->data = data;

  if (oldHead->data == data_after) {
    newNode->next = oldHead;
    *head = newNode;
    return;
  }

  while (oldHead) {
    if (oldHead->data == data_after) {
      prev->next = newNode;
      newNode->next = oldHead;
      return;
    }
    prev = oldHead;
    oldHead = oldHead->next;
  }
}

int main(int argc, char const* argv[]) {
  struct node* head = malloc(sizeof(struct node));
  head->data = 1;
  head->next = malloc(sizeof(struct node));
  head->next->data = 3;
  head->next->next = malloc(sizeof(struct node));
  head->next->next->data = 4;

  insert(&head, 3, 2);
  while (head) {
    printf("%d, ", head->data);
    head = head->next;
  }

  return 0;
}
