#include <vector>
#include <iostream>
#include <map>

using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        map<int, int> numMap;
        for (int i = 0; i < nums.size(); i++)
        {
            int key = nums[i];
            if (numMap.find(key) != numMap.end())
            {
                return {numMap[key], i};
            }
            else
            {
                numMap[target - key] = i;
            }
        }
        return {};
    }
};

int main()
{
    // vector<int> arr = {2, 7, 11, 15};
    // int target = 9;
    vector<int> arr = {2, 5, 5, 11};
    int target = 10;

    Solution solution;
    vector<int> result = solution.twoSum(arr, target);
    for (int value : result)
    {
        cout << value << endl;
    }
}