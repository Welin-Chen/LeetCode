#include <iostream>
using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode* left, TreeNode* right)
      : val(x), left(left), right(right) {}
};

class Solution {
 public:
  void flatten(TreeNode* root) {
    if (!root) return;

    TreeNode* temp = root->right;
    root->right = root->left;
    root->left = NULL;
    TreeNode* rightTail = root;

    while (rightTail->right) {
      rightTail = rightTail->right;
    }

    rightTail->right = temp;
    flatten(root->right);
  }
};

int main(int argc, char const* argv[]) {
  //     Input: root = [1,2,5,3,4,null,6]
  // Output: [1,null,2,null,3,null,4,null,5,null,6]
  TreeNode* root = new TreeNode(1);
  root->left = new TreeNode(2);
  root->right = new TreeNode(5);
  root->left->left = new TreeNode(3);
  root->left->right = new TreeNode(4);
  root->right->right = new TreeNode(6);

  Solution s;
  s.flatten(root);

  while (root) {
    cout << root->val << ", ";
    root = root->right;
  }
  return 0;
}
