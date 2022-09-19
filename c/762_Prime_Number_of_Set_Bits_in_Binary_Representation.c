#include <stdio.h>

int prime(int n) {
  if (n == 1) return 0;

  for (int i = 2; i < n; i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}

int countPrimeSetBits(int left, int right) {
  int primes = 0;
  for (int i = left; i <= right; i++) {
    int ones = 0;
    int j = i;
    while (j) {
      if (j & 1) ones++;
      j >>= 1;
    }
    if (prime(ones)) primes++;
  }
  return primes;
}

int main(int argc, char const *argv[]) {
  // Input: left = 6, right = 10
  // Output: 4
  int left = 10;
  int right = 15;

  printf("%d\n", countPrimeSetBits(left, right));
  return 0;
}
