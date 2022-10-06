/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
#include <iostream>

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
 public:
  TreeNode* mergeTrees(TreeNode* r1, TreeNode* r2) {
    if (r1 && r2) {
      TreeNode* r = new TreeNode(r1->val + r2->val);
      r->left = mergeTrees(r1->left, r2->left);
      r->right = mergeTrees(r1->right, r2->right);
      return r;
    } else {
      return r1 ? r1 : r2;
    }
  }
};

int main(int argc, char const* argv[]) { return 0; }
