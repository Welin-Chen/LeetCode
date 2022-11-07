// 一百張牌分別為1～100 抽出一張 試問那張牌為多少，請寫出一個演算法
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int getRandomNum() { return rand() % 100 + 1; }

int main(int argc, char const *argv[]) {
  unsigned seed = time(0);
  srand(seed);

  for (size_t i = 0; i < 10; i++) {
    printf("%d,", getRandomNum());
  }

  return 0;
}
