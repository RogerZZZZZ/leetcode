/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head) return head;

  const dummy = new ListNode(0)
  dummy.next = head;
  let lastSorted = head;
  let cur = head.next;

  while (cur !== null) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummy;
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      lastSorted.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }

    cur = lastSorted.next;
  }
  return dummy.next
};