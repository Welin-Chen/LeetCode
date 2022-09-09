class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? 0 : next;
  }
}

var reverseList = function (head) {
  let prev = null;

  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }
  return prev;
};

let head = [1, 2, 3, 4, 5];

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(reverseList(head));
