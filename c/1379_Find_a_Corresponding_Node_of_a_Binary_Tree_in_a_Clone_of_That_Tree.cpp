#include <iostream>
using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
 public:
  TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned,
                          TreeNode* target) {
    return dfs(cloned, target);
  }

  TreeNode* dfs(TreeNode* root, TreeNode* target) {
    if (!root) return NULL;
    if (root->val == target->val) return root;

    TreeNode* l = dfs(root->left, target);
    TreeNode* r = dfs(root->right, target);

    if (l) return l;
    if (r) return r;
    return NULL;
  }
};

int main(int argc, char const* argv[]) {
  Solution s;
  TreeNode* original = new TreeNode(7);
  original->left = new TreeNode(4);
  original->right = new TreeNode(3);
  original->right->left = new TreeNode(6);
  original->right->right = new TreeNode(19);

  TreeNode* cloned = new TreeNode(7);
  cloned->left = new TreeNode(4);
  cloned->right = new TreeNode(3);
  cloned->right->left = new TreeNode(6);
  cloned->right->right = new TreeNode(19);

  TreeNode* target = cloned->right;

  TreeNode* res = s.getTargetCopy(original, cloned, target);
  cout << res->val << endl;
  return 0;
}
