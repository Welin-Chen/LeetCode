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
  let head = new ListNode(arr.shift());
  let crt = head;

  while (arr.length) {
    crt.next = new ListNode(arr.shift());
    crt = crt.next;
  }
  return head;
}

function listToArr(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
var middleNode = function (head) {
  let size = 0,
    crt = head;
  while (crt) {
    crt = crt.next;
    size++;
  }
  let mid = size % 2 === 0 ? size / 2 + 1 : Math.ceil(size / 2);
  crt = head;
  while (--mid) crt = crt.next;
  return crt;
};

let head = [1, 2, 3, 4, 5];
// let head = [1, 2, 3, 4, 5, 6];
head = arrToList(head);
console.log(listToArr(head));
console.log(middleNode(head));
