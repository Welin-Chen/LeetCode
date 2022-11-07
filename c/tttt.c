//     1
//    222
//   33333
//  4444444
// 555555555
#include <stdio.h>

void draw(int n) {
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      if (j < n - i + 1)
        printf("%s", " ");
      else
        printf("%d", i);
    }
    for (int j = n; j <= 2 * n; j++) {
      if (j < n + i - 1)
        printf("%d", i);
      else
        printf("%s", " ");
    }
    printf("\n");
  }
}

int main(int argc, char const *argv[]) {
  draw(5);
  return 0;
}
