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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return false;
  const list = [];

  while (head) {
    list.push(head.val)
    head = head.next;
  }
  const str = list.join('');
  return str === str.split('').reverse().join('');
};

const node4 = new ListNode(1, null)
const node3 = new ListNode(2, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

console.log(isPalindrome(node1))