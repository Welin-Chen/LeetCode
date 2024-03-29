#include <iostream>
using namespace std;

class Solution {
 public:
  int countPrimeSetBits(int left, int right) {
    int primes = 0;
    for (int i = left; i <= right; i++) {
      int ones = 0;
      int n = i;
      while (n) {
        if (n & 1) ones++;
        n >>= 1;
      }
      if (isPrime(ones)) primes++;
    }
    return primes;
  }

  bool isPrime(int n) {
    if (n == 1) return false;
    for (int i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }

    return true;
  }
};

int main(int argc, char const *argv[]) {
  Solution s;
  int left = 6;
  int right = 10;

  cout << s.countPrimeSetBits(left, right) << endl;
  return 0;
}
