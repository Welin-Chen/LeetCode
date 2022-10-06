#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STACK_SIZE 100

typedef struct {
  int* val;
  int count;
} MyStack;

MyStack* myStackCreate() {
  MyStack* stack = malloc(sizeof(MyStack));
  memset(stack, 0, sizeof(MyStack));
  stack->val = malloc(sizeof(int) * STACK_SIZE);
  memset(stack->val, 0, sizeof(int) * STACK_SIZE);

  return stack;
}

void myStackPush(MyStack* obj, int x) { obj->val[obj->count++] = x; }

int myStackPop(MyStack* obj) {
  if (obj->count <= 0) return -1;

  int a = obj->val[--obj->count];

  return a;
}

int myStackTop(MyStack* obj) {
  if (obj->count <= 0) return -1;
  return obj->val[obj->count - 1];
}

bool myStackEmpty(MyStack* obj) {
  if (obj->count <= 0) return true;
  return false;
}

void myStackFree(MyStack* obj) {
  free(obj->val);
  free(obj);
}

int main(int argc, char const* argv[]) {
  // Input
  // ["MyStack", "push", "push", "top", "pop", "empty"]
  // [[], [1], [2], [], [], []]
  // Output
  // [null, null, null, 2, 2, false]

  MyStack* stack = myStackCreate();
  myStackPush(stack, 1);
  myStackPush(stack, 2);
  printf("%d\n", myStackTop(stack));
  printf("%d\n", myStackPop(stack));
  printf("%s\n", myStackEmpty(stack) ? "true" : "false");

  return 0;
}
