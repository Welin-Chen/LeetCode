/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
};

struct TreeNode* mergeTrees(struct TreeNode* r1, struct TreeNode* r2) {
  if (r1 && r2) {
    struct TreeNode* r = (struct TreeNode*)malloc(sizeof(struct TreeNode));

    r->val = r1->val + r2->val;
    r->left = mergeTrees(r1->left, r2->left);
    r->right = mergeTrees(r1->right, r2->right);

    return r;
  } else {
    return r1 ? r1 : r2;
  }
}

int main(int argc, char const* argv[]) {
  //     Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
  // Output: [3,4,5,5,4,null,7]

  return 0;
}
