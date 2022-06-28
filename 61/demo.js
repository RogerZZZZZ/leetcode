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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head) return head;
  let cnt = 1;
  let temp = head;
  while(temp.next) {
    cnt += 1;
    temp = temp.next;
  }

  let add = cnt - k % cnt;
  if (cnt === add) return head;

  temp.next = head;
  while (add) {
    temp = temp.next
    add -= 1;
  }

  const ret = temp.next;
  temp.next = null;
  return ret;
};

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(rotateRight(node1, 2))
