/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
#include <math.h>
#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
};

int countNodes(struct TreeNode* root) {
  if (!root) return 0;

  struct TreeNode* l = root;
  struct TreeNode* r = root;

  int n1 = 0;
  int n2 = 0;

  while (l) {
    n1++;
    l = l->left;
  }
  while (r) {
    n2++;
    r = r->right;
  }
  if (n1 == n2) pow(2, n1) - 1;
  return 1 + countNodes(root->left) + countNodes(root->right);
}

int main(int argc, char const* argv[]) {
  //     Input: root = [1,2,3,4,5,6]
  // Output: 6
  struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->val = 1;
  root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->val = 2;
  root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->right->val = 3;
  root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->left->val = 4;
  root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->right->val = 5;
  root->right->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->right->left->val = 6;

  printf("%d\n", countNodes(root));
  return 0;
}

// 2^0+2^1+2^2=1+2+4=7=2^3-1=2^h-1
