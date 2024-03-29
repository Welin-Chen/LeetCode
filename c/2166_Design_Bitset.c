#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int flips[100000];
  int allFlip;
  int ones;
  int n;
} Bitset;

Bitset* bitsetCreate(int size) {
  Bitset* obj = (Bitset*)malloc(sizeof(Bitset));
  for (int i = 0; i < size; i++) {
    obj->flips[i] = 0;
  }
  obj->n = size;
  obj->ones = 0;
  obj->allFlip = 0;
  return obj;
}

void bitsetFix(Bitset* obj, int idx) {
  if ((obj->flips[idx] + obj->allFlip) % 2 == 0) {
    obj->flips[idx]++;
    obj->ones++;
  }
}

void bitsetUnfix(Bitset* obj, int idx) {
  if ((obj->flips[idx] + obj->allFlip) % 2 == 1) {
    obj->flips[idx]--;
    obj->ones--;
  }
}

void bitsetFlip(Bitset* obj) {
  obj->allFlip++;
  obj->ones = obj->n - obj->ones;
}

bool bitsetAll(Bitset* obj) { return obj->ones == obj->n; }

bool bitsetOne(Bitset* obj) { return obj->ones > 0; }

int bitsetCount(Bitset* obj) { return obj->ones; }

char* bitsetToString(Bitset* obj) {
  int len = obj->n;
  char* s = (char*)malloc(sizeof(char) * (len + 1));
  for (int i = 0; i < len; i++) {
    s[i] = (obj->flips[i] + obj->allFlip) % 2 == 0 ? '0' : '1';
  }
  s[len] = '\0';
  return s;
}

void bitsetFree(Bitset* obj) { free(obj); }

int main(int argc, char const* argv[]) {
  Bitset* bs = bitsetCreate(5);
  bitsetFix(bs, 3);
  printf("%s\n", bitsetToString(bs));

  return 0;
}
