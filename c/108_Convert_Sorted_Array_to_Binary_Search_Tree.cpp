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
  TreeNode* sortedArrayToBST(vector<int>& nums) {
    return helper(nums, 0, nums.size() - 1);
  }

  TreeNode* helper(vector<int>& nums, int start, int end) {
    if (start > end) return NULL;

    int mid = (start + end) / 2;
    TreeNode* root = new TreeNode(nums[mid]);

    root->left = helper(nums, start, mid - 1);
    root->right = helper(nums, mid + 1, end);

    return root;
  }
};

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

  vector<int> nums = {-10, -3, 0, 5, 9};

  Solution s;
  struct TreeNode* root = s.sortedArrayToBST(nums);

  dfs(root);
  return 0;
}
