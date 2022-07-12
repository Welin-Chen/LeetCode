/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  let node = head;
  while (node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};

function makeList(arr, i = 0) {
  while (i < arr.length) {
    return new ListNode(arr[i], makeList(arr, i + 1));
  }
}

function print(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  console.log(arr);
}

const list1 = makeList([1, 1, 2, 2, 3, 4, 7, 7, 7]);
// const list1 = makeList([1, 1, 2, 2, 3, 3]);
// const list1 = makeList([]);
const result = deleteDuplicates(list1);
print(result);
