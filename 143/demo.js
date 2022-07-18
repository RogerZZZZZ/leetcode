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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return head;
  let cur = head;
  const list = [];
  while (cur) {
    list.push(cur);
    cur = cur.next;
  }
  cur = head;
  let start = 0;
  let end = list.length - 1;
  while (start < end) {
    list[start].next = list[end];
    start++;
    if (start === end) {
      break;
    }
    list[end].next = list[start];
    end--
  }
  list[start].next = null;
  return head;
};

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(reorderList(node1))