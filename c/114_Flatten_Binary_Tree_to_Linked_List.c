#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
};

void flatten(struct TreeNode* root) {
  if (!root) return;

  struct TreeNode* t = root->right;
  root->right = root->left;
  root->left = NULL;
  struct TreeNode* rightTail = root;

  while (rightTail->right) {
    rightTail = rightTail->right;
  }
  rightTail->right = t;
  flatten(root->right);
}

int main(int argc, char const* argv[]) {
  //     Input: root = [1,2,5,3,4,null,6]
  // Output: [1,null,2,null,3,null,4,null,5,null,6]
  struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->val = 1;
  root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->val = 2;
  root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->right->val = 5;
  root->left->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->left->val = 3;
  root->left->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->left->right->val = 4;
  root->right->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->right->right->val = 6;

  flatten(root);

  while (root) {
    printf("%d, ", root->val);
    root = root->right;
  }
  return 0;
}
