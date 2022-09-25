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

struct TreeNode* helper(int* nums, int start, int end) {
  if (start > end) return NULL;

  int mid = (start + end) / 2;
  struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
  root->val = nums[mid];

  root->left = helper(nums, start, mid - 1);
  root->right = helper(nums, mid + 1, end);

  return root;
}

struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
  return helper(nums, 0, numsSize - 1);
}

void dfs(struct TreeNode* root) {
  if (!root) return;
  if (root->left) dfs(root->left);
  printf("%d, ", root->val);
  if (root->right) dfs(root->right);
}

int main(int argc, char const* argv[]) {
  // Input: nums = [-10,-3,0,5,9]
  // Output: [0,-3,9,-10,null,5]
  // Explanation: [0,-10,5,null,-3,null,9] is also accepted:

  int nums[] = {-10, -3, 0, 5, 9};
  int numsSize = sizeof(nums) / sizeof(nums[0]);

  struct TreeNode* root = sortedArrayToBST(nums, numsSize);

  dfs(root);
  return 0;
}
