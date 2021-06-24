/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const root = new ListNode(0, null);
  let point = root;

  let first = l1;
  let second = l2;

  while (first && second) {
    if (first.val >= second.val) {
      point.next = second;
      second = second.next;
    } else {
      point.next = first;
      first = first.next;
    }
    point = point.next;
  }

  if (second) {
    point.next = second;
  }

  if (first) {
    point.next = first;
  }

  return root.next;
};


const node3 = new ListNode(3, null)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

const node7 = new ListNode(5, null)
const node6 = new ListNode(4, node7)
const node5 = new ListNode(3, node6)
const node4 = new ListNode(1, node5)

let head = mergeTwoLists(node1, node4);

while (head) {
  console.log(head.val)
  head = head.next;
}