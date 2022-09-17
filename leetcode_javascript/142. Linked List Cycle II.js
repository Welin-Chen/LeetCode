/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
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
// var detectCycle = function (head) {
//   if (!head) return null;
//   let crt = head;
//   let obj = {};
//   let i = 0;

//   while (crt.next) {
//     obj[i] = crt;
//     for (let j = 0; j < i; j++) {
//       if (obj[j] === obj[i]) return obj[i];
//     }
//     i++;
//     crt = crt.next;
//   }
//   return null;
// };

var detectCycle = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let slow2 = head;
      while (slow !== slow2) {
        slow = slow.next;
        slow2 = slow2.next;
      }
      return slow;
    }
  }
  return null;
};

function cycle(head, pos) {
  let crt = head;
  let begin;
  let i = 0;
  while (crt.next) {
    if (i === pos) begin = crt;
    i++;
    crt = crt.next;
  }
  crt.next = begin;
  return head;
}

let head = [3, 2, 0, -4],
  pos = 1;
// let head = [],
//   pos = -1;
// let head = [-1, -7, 7, -4, 19, 6, -9, -5, -2, -5],
//   pos = 6;
head = arrToList(head);
head = cycle(head, pos);
// console.log(head);

console.log(detectCycle(head));
