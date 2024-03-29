#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int* arr;
  int size;
  int max;
} CustomStack;

CustomStack* customStackCreate(int maxSize) {
  CustomStack* s = malloc(sizeof(CustomStack));
  s->arr = malloc(sizeof(int) * maxSize);
  s->size = 0;
  s->max = maxSize;
  return s;
}

void customStackPush(CustomStack* obj, int x) {
  if (obj->size >= obj->max) return;
  obj->arr[obj->size++] = x;
}

int customStackPop(CustomStack* obj) {
  if (obj->size == 0) return -1;
  return obj->arr[--obj->size];
}

void customStackIncrement(CustomStack* obj, int k, int val) {
  if (k > obj->size) k = obj->size;
  for (int i = 0; i < k; i++) {
    obj->arr[i] += val;
  }
}

void customStackFree(CustomStack* obj) {
  free(obj->arr);
  free(obj);
}
