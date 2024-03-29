#include <limits.h>
#include <stdio.h>

typedef struct {
  int* arr;
  int top;
  int min;
} MinStack;

MinStack* minStackCreate() {
  MinStack* s = malloc(sizeof(MinStack));
  s->arr = malloc(sizeof(int) * 10000);
  s->top = -1;
  s->min = INT_MAX;
  return s;
}

void minStackPush(MinStack* obj, int val) {
  if (obj->top == -1) {
    obj->min = val;
  } else if (val <= obj->min) {
    obj->arr[++obj->top] = obj->min;
    obj->min = val;
  }
  obj->arr[++obj->top] = val;
}

void minStackPop(MinStack* obj) {
  if (obj->top <= 0) {
    obj->top = -1;
    obj->min = INT_MAX;
  } else if (obj->arr[obj->top] == obj->min) {
    obj->min = obj->arr[obj->top - 1];
    obj->top -= 2;
  } else {
    obj->top--;
  }
}

int minStackTop(MinStack* obj) { return obj->arr[obj->top]; }

int minStackGetMin(MinStack* obj) { return obj->min; }

void minStackFree(MinStack* obj) { free(obj); }
