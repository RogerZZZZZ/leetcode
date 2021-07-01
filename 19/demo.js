/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const root = new ListNode(0, head)
  let fast = root;
  let slow = root;

  let c = n;
  while(c && fast.next) {
    fast = fast.next;
    c--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  if (slow.next) {
    slow.next = slow.next.next;
  } else {
    slow.next = null;
  }
  return root.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, null)

console.log(removeNthFromEnd(head, 1));