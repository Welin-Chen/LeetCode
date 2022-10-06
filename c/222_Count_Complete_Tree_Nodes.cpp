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
#include <math.h>

#include <iostream>
using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(0), left(NULL), right(NULL) {}
};

class Solution {
 public:
  int countNodes(TreeNode* root) {
    if (!root) return 0;

    TreeNode* l = root;
    TreeNode* r = root;

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

    if (n1 == n2) return pow(2, n1) - 1;
    return 1 + countNodes(root->left) + countNodes(root->right);
  }
};

int main(int argc, char const* argv[]) {
  //     Input: root = [1,2,3,4,5,6]
  // Output: 6
  TreeNode* root = new TreeNode(1);
  root->left = new TreeNode(2);
  root->right = new TreeNode(3);
  root->left->left = new TreeNode(4);
  root->left->right = new TreeNode(5);
  root->right->left = new TreeNode(6);

  Solution s;
  cout << s.countNodes(root) << endl;

  return 0;
}

// 2^0+2^1+2^2=1+2+4=7=2^3-1=2^h-1
