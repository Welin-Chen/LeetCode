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

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrToList(arr) {
  if (arr.length === 0) return null;
  function helper(arr) {
    let node = new ListNode(arr.shift());
    if (arr.length === 0) return node;
    node.next = arrToList(arr);
    return node;
  }
  return helper(arr);
}

function print(list) {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// var reverseList = function (head) {
//   if (!head) return null;
//   let crt = head;
//   let arr = [];
//   while (crt) {
//     arr.push(crt.val);
//     crt = crt.next;
//   }
//   head = new ListNode(arr[arr.length - 1]);
//   crt = head;
//   for (let i = arr.length - 2; i >= 0; i--) {
//     crt.next = new ListNode(arr[i]);
//     crt = crt.next;
//   }
//   return head;
// };
var reverseList = function (head) {
  let prev = null;
  let crt = head;
  while (crt) {
    let temp = crt.next;
    crt.next = prev;
    prev = crt;
    crt = temp;
  }
  return prev;
};
// var reverseList = function (head) {
//   let prev = null;
//   let crt = head;
//   while (crt) {
//     [crt.next, prev, crt] = [prev, crt, crt.next];
//   }
//   return prev;
// };
let head = [1, 2, 3, 4, 5];
// let head = [1, 2];
// let head = [];

head = arrToList(head);
let result = reverseList(head);
console.log(result);
console.log(print(result));
