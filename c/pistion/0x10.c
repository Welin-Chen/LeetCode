#include <stdio.h>

#define seconds_per_year 60 * 60 * 24 * 365UL
#define min(a, b) ((a) <= (b) ? (a) : (b))
#define BIT3 (0x1 << 3)

static int a = 0;
void set_bit3(void) { a |= BIT3; }
void clear_bit3(void) { a &= ~BIT3; }

int main(int argc, char const *argv[]) {
  printf("%ld\n", seconds_per_year);

  printf("%d\n", min(3, 7));

  printf("%d\n", a);
  printf("%d\n", BIT3);

  set_bit3();
  printf("%d\n", a);

  clear_bit3();
  printf("%d\n", a);

  //   a.int a;          // An integer
  //   b.int *a;         // A pointer to an integer
  //   c.int **a;        // A pointer to a pointer to an integer
  //   d.int a[10];      // An arrary of 10 integers
  //   e.int *a[10];     // An array of 10 pointers to integers
  //   f.int(*a)[10];    // A pointer to an array of 10 integers
  //   g.int (*a)(int);  // a pointer to a function that takes an integer
  //   argument
  //                     // and return an integer
  //   h.int (*a[10])(int);  // an array of 10 pointers to a function that takes
  //   an
  //                         // integer argument and return an integer

  // static: 1.值固定 2.不可被外部檔案或函式使用 3.只能在宣告的區塊內使用

  //   const int a;   // a is an const integer
  //   int const a;   // a is a const integer與上面相同
  //   const int *a;  // a is a pointer to a const integer,指標可變
  //   int *const a;  // a is a const pointer to an integer,指標指的整數類型可變
  //   int const *a const;  // a is a const pointer to an const
  //                        // integer,指標跟指標指向的整數類型都不可變

  // volatile:易揮發的，該變數可能會被變動，所以每次都要重新讀取這個變數的值，而非用保存在寄存器的備份

  int *ptr;
  ptr = (int *)0x67a9;
  *ptr = 0xaa55;

  // isr:interrupt
  // isr不能返回一個值
  // isr不能傳遞參數
  // 不要在isr內做浮點數運算
  return 0;
}
