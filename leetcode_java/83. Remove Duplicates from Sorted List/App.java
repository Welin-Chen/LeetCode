import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

}

// class Solution {
// public ListNode deleteDuplicates(ListNode head) {

// }

// }

//

public class App {
    public static void main(String[] args) throws Exception {
        Solution solution = new Solution();
        ListNode head = null;

        System.out.println(push(5));

        int nums[] = { 2, 5, 5, 11 };
        int result[] = solution.twoSum(nums, 10);
        System.out.println(Arrays.toString(result));
        
        static int push(int val) {
                // System.out.println(val)
                return val * 10;
            }
    }
}
