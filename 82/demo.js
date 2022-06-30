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
var deleteDuplicates = function(head) {
  if (!head) return head;

  const dummy = new ListNode(0, head);
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next
};

const node7 = new ListNode(5, null)
const node6 = new ListNode(4, node7)
const node5 = new ListNode(4, node6)
const node4 = new ListNode(3, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(deleteDuplicates(node1))