#include <iostream>
using namespace std;

double findSqrt(double n) {
  double diff = INT_MAX;
  double l = 0;
  double r = n;
  double mid;

  while (diff > 1.0e-2) {
    mid = (l + r) / 2;
    diff = mid * mid - n;
    if (diff > 0)
      r = mid;
    else
      l = mid;
    diff = abs(diff);
  }

  return mid;
}

int main(int argc, char const *argv[]) {
  int n = 10;
  cout << "sqrt=" << findSqrt(n) << endl;
  cout << "diff=" << n - findSqrt(n) * findSqrt(n) << endl;
  return 0;
}
