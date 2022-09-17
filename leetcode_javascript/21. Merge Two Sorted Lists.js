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

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode(0),
    crt = list;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;
  return list.next;
};

function print(list) {
  if (!list) return [];
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// let list1 = [1, 2, 4],
//   list2 = [1, 3, 4];
let list1 = [-9, 3],
  list2 = [5, 7];
// let list1 = [],
//   list2 = [];
list1 = arrToList(list1);
list2 = arrToList(list2);

let list = mergeTwoLists(list1, list2);
console.log(list);
console.log(print(list));
