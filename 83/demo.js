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
  if (!head) return null;
  const duplicateMap = new Map();
  let cur = head;
  let first = head;
  duplicateMap.set(first.val, true);
  cur = cur.next;
  while (cur) {
    while(duplicateMap.get(cur.val)) {
      if (!cur.next) {
        first.next = null;
        return head;
      }
      cur = cur.next;
    }
    duplicateMap.set(cur.val, true);
    first.next = cur;
    first = cur;
    cur = cur.next;
  }
  return head;
};

const node5 = new ListNode(4, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(1, node3)
const node1 = new ListNode(1, node2)

console.log(deleteDuplicates(node1));