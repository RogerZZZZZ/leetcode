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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return head;
  let slow = head;
  let fast = head.next;
  if (!fast) return head;
  slow.next = null;

  while (fast) {
    let temp = fast.next;
    fast.next = slow;
    slow = fast;
    if (temp) {
      fast = temp;
    } else {
      break;
    }
  }
  return fast;
};

const node5 = new ListNode(9, null)
const node4 = new ListNode(5, node5)
const node3 = new ListNode(0, node4)
const node2 = new ListNode(-3, node3)
const node1 = new ListNode(-10, node2)

console.log(reverseList(node1))