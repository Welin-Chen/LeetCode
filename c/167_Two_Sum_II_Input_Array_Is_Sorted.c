/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
  int l = 0;
  int r = numbersSize - 1;
  int* res = malloc(sizeof(int) * 2);
  *returnSize = 2;

  while (l < r) {
    int sum = numbers[l] + numbers[r];
    if (sum == target) {
      res[0] = l + 1;
      res[1] = r + 1;
      return res;
    } else if (sum > target)
      r--;
    else
      l++;
  }
  return NULL;
}

int main(int argc, char const* argv[]) {
  //     Input: numbers = [2,7,11,15], target = 9
  // Output: [1,2]

  int numbers[] = {2, 7, 11, 15};
  int target = 9;
  int size = sizeof(numbers) / sizeof(numbers[0]);
  int* returnSize = &size;

  int* a = twoSum(numbers, size, target, returnSize);
  for (int i = 0; i < 2; i++) {
    printf("%d,", a[i]);
  }
  return 0;
}
