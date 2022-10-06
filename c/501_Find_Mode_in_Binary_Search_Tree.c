/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
};

int cnt;
int maxCnt;
int prev;
int resTop;
int* res;

void inOrder(struct TreeNode* root) {
  if (!root) return;

  inOrder(root->left);

  if (root->val == prev) {
    cnt++;
  } else {
    cnt = 1;
    prev = root->val;
  }

  if (cnt == maxCnt) {
    res[resTop++] = root->val;
  } else if (cnt > maxCnt) {
    resTop = 0;
    res[resTop++] = root->val;
    maxCnt = cnt;
  }
  inOrder(root->right);
}

int* findMode(struct TreeNode* root, int* returnSize) {
  cnt = 0;
  maxCnt = 0;
  prev = INT_MIN;
  resTop = 0;
  res = malloc(sizeof(int) * 10000);

  inOrder(root);
  *returnSize = resTop;
  return res;
}

int main(int argc, char const* argv[]) {
  // Input: root = [1,null,2,2]
  // Output: [2]

  struct TreeNode* root = malloc(sizeof(struct TreeNode));
  root->val = 1;
  root->right = malloc(sizeof(struct TreeNode));
  root->right->val = 2;
  root->right->right = malloc(sizeof(struct TreeNode));
  root->right->right->val = 2;

  int* a = findMode(root, &resTop);
  for (int i = 0; i < resTop; i++) {
    printf("%d\n", a[i]);
  }

  return 0;
}
