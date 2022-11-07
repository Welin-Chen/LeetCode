// Q1: 不能用if 和 switch case , 請用你認為最快的方法實作main
// extern void func1(void);
// extern void func2(void);
// extern void func3(void);
// extern void func4(void);
// extern void func5(void);
// void main(int n)
// {
//   if n==1 execute func1;
//   if n==2 execute func2;
//   if n==3 execute func3;
//   if n==4 execute func4;
//   if n==5 execute func5;
// }

// Q2: 不使用if, 請用你認為最快的方法實作main
// extern void func1(void);
// extern void func2(void);
// extern void func3(void);
// extern void func4(void);
// extern void func5(void);

// void main(int n)
// {
//   if n==33 execute func1;
//   if n==67 execute func2;
//   if n==324 execute func3;
//   if n==231 execute func4;
//   if n==687 execute func5;
// }

#include <iostream>
using namespace std;
typedef void (*funcs)(void);

extern void func1(void) { cout << "call func1" << endl; };
extern void func2(void) { cout << "call func2" << endl; };
extern void func3(void) { cout << "call func3" << endl; };
extern void func4(void) { cout << "call func4" << endl; };
extern void func5(void) { cout << "call func5" << endl; };

// Q1:
int main(int argc, char const *argv[]) {
  int n = 5;
  funcs funcArr[6] = {NULL, func1, func2, func3, func4, func5};
  funcArr[n]();
  return 0;
}

// Q2:
// int main(int argc, char const *argv[]) {
//   int n = 687;
//   funcs funcArr[700];
//   funcArr[33] = func1;
//   funcArr[67] = func2;
//   funcArr[324] = func3;
//   funcArr[231] = func4;
//   funcArr[687] = func5;
//   funcArr[n]();
//   return 0;
// }