/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *deleteDuplicates(ListNode *head)
    {
        ListNode *cur = head;
        while (cur && cur->next)
        {
            if (cur->val == cur->next->val)
            {
                cur->next = cur->next->next;
            }
            else
            {
                cur = cur->next;
            }
        }
        return head;
    }
};

#include <iostream>
#include <vector>
using namespace std;

ListNode *makeList(vector<int> arr, int i = 0)
{
    if (i == arr.size())
        return NULL;
    return new ListNode(arr[i], makeList(arr, i + 1));
}

void traverse(ListNode *head)
{
    if (head == NULL)
        return;
    cout << head->val << endl;
    traverse(head->next);

    // while (head)
    // {
    //     cout << head->val << endl;
    //     head = head->next;
    // }
}

ListNode *push(ListNode *head, int val)
{
    if (head == NULL)
    {
        return new ListNode(val);
    }
    head->next = push(head->next, val);
    return head;
}

int main()
{
    Solution solution;
    vector<int> arr = {1, 1, 1, 2, 3, 5, 7, 7, 7};

    // ListNode *head = makeList(arr);
    // push(head, 4);

    ListNode *head = NULL;
    solution.deleteDuplicates(head);
    traverse(head);
}
