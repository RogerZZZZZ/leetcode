/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (
    slow
    && fast
  ) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next;
    if (!fast) {
      return false;
    }
    fast = fast.next;
  }
  return false;
};

const node8 = new ListNode(5, null)
const node7 = new ListNode(5, node8)
const node6 = new ListNode(4, node7)
const node5 = new ListNode(3, node6)
const node4 = new ListNode(1, node5)
node8.next = node5

console.log(node4)

console.log(hasCycle(node4))