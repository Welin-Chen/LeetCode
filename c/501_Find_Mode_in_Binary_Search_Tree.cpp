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
#include <vector>
using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
 public:
  int cnt = 0;
  int maxCnt = 0;
  int prev = INT_MIN;
  vector<int> res;

  vector<int> findMode(TreeNode* root) {
    inOrder(root);
    return res;
  }

  void inOrder(TreeNode* root) {
    if (!root) return;

    inOrder(root->left);

    if (root->val == prev) {
      cnt++;
    } else {
      cnt = 1;
      prev = root->val;
    }

    if (cnt == maxCnt) {
      res.push_back(root->val);
    } else if (cnt > maxCnt) {
      maxCnt = cnt;
      res = {};
      res.push_back(root->val);
    }
    inOrder(root->right);
  }
};

int main(int argc, char const* argv[]) {
  // Input: root = [1,null,2,2]
  // Output: [2]

  TreeNode* root = new TreeNode(1);
  root->right = new TreeNode(2);
  root->right->right = new TreeNode(2);

  Solution s;
  vector<int> a = s.findMode(root);

  for (int i = 0; i < a.size(); i++) {
    printf("%d\n", a[i]);
  }

  return 0;
}
