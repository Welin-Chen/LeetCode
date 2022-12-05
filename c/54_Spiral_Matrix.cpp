#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> res;
    int left = 0;
    int right = matrix[0].size() - 1;
    int top = 0;
    int bottom = matrix.size() - 1;

    while (left <= right and top <= bottom) {
      for (int j = left; j <= right; j++) {
        res.push_back(matrix[top][j]);
      }
      top++;

      for (int i = top; i <= bottom; i++) {
        res.push_back(matrix[i][right]);
      }
      right--;

      if (left > right || top > bottom) break;

      for (int j = right; j >= left; j--) {
        res.push_back(matrix[bottom][j]);
      }
      bottom--;

      for (int i = bottom; i >= top; i--) {
        res.push_back(matrix[i][left]);
      }
      left++;
    }

    return res;
  }
};

int main(int argc, char const* argv[]) {
  //   Input:matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
  //   Output: [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]

  vector<vector<int>> input = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  Solution s;
  vector<int> output = s.spiralOrder(input);

  for (int i = 0; i < output.size(); i++) {
    cout << output[i] << ",";
  }
  cout << endl;
  return 0;
}
