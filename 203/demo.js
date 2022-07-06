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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;
  
  const dummy = new ListNode(Number.MAX_SAFE_INTEGER, head);
  let cur = dummy;

  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};

const node5 = new ListNode(7, null)
const node4 = new ListNode(7, node5)
const node3 = new ListNode(7, node4)
const node2 = new ListNode(7, node3)
const node1 = new ListNode(7, node2)

console.log(removeElements(node1,  7))