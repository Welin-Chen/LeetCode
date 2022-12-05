#include <math.h>
#include <stdbool.h>
#include <stdio.h>

int next(int n) {
  int sum = 0;

  while (n != 0) {
    sum += pow(n % 10, 2);
    n = n / 10;
  }
  return sum;
}
bool isHappy(int n) {
  int slow = next(n);
  int fast = next(next(n));

  while (slow != fast) {
    slow = next(slow);
    fast = next(next(fast));
  }
  return fast == 1;
}

int main(int argc, char const *argv[]) {
  printf("%d\n", isHappy(19));
  printf("%d\n", isHappy(2));
  return 0;
}
