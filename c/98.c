#include <limits.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
};

bool dfs(struct TreeNode* root, long min, long max) {
  if (!root) return true;

  int v = root->val;
  if (v >= max || v <= min) return false;

  return dfs(root->left, min, v) && dfs(root->right, v, max);
};

bool isValidBST(struct TreeNode* root) {
  return dfs(root, LONG_MIN, LONG_MAX);
};

int main(int argc, char const* argv[]) {
  struct TreeNode* root = malloc(sizeof(struct TreeNode));
  // Input: root = [2,1,3]
  // Output: true
  root->val = 2;
  root->left = malloc(sizeof(struct TreeNode));
  root->left->val = 1;
  root->right = malloc(sizeof(struct TreeNode));
  root->right->val = 3;

  printf("%d\n", isValidBST(root));

  return 0;
}
