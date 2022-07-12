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
var deleteDuplicates = function (head) {};

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
  return arr;
}

const list = makeList([1, 2, 3, 3, 4, 4, 5]);
const result = print(list);
