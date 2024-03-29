#include <iostream>
using namespace std;

class Bitset {
  int flips[100000] = {0};
  int totalFlip = 0;
  int ones = 0;
  int m;

 public:
  Bitset(int size) { m = size; }

  void fix(int idx) {
    if ((flips[idx] + totalFlip) % 2 == 0) {
      flips[idx]++;
      ones++;
    }
  }

  void unfix(int idx) {
    if ((flips[idx] + totalFlip) % 2 == 1) {
      flips[idx]--;
      ones--;
    }
  }

  void flip() {
    ones = m - ones;
    totalFlip++;
  }

  bool all() { return ones == m; }

  bool one() { return ones > 0; }

  int count() { return ones; }

  string toString() {
    string s;
    for (int i = 0; i < m; i++) {
      s += (flips[i] + totalFlip) % 2 == 0 ? "0" : "1";
    }
    return s;
  }
};

int main(int argc, char const *argv[]) {
  const int n = 5;
  Bitset bs = Bitset(5);
  bs.fix(3);
  cout << bs.count() << endl;
  cout << bs.toString() << endl;
  return 0;
}
