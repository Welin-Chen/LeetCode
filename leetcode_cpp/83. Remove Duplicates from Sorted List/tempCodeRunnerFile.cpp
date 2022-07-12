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