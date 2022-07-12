/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function makeList(arr, i = 0) {
  if (i < arr.length) {
    return new ListNode(arr[i], makeList(arr, i + 1));
  }
}

const list1 = makeList([1, 2, 4]);
const list2 = makeList([1, 3, 4]);

print(list1);
print(list2);
print(mergeTwoLists(list1, list2));

function print(list, arr = []) {
  arr.push(list.val);
  if (list.next) {
    print(list.next, arr);
  } else {
    console.log("list:", arr);
  }
}
