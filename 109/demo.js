/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const buildTree = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = buildTree(left, mid - 1);
    root.right = buildTree(mid + 1, right);
    return root;
  };

  return buildTree(0, arr.length - 1);
};

const node5 = new ListNode(9, null)
const node4 = new ListNode(5, node5)
const node3 = new ListNode(0, node4)
const node2 = new ListNode(-3, node3)
const node1 = new ListNode(-10, node2)

console.log(sortedListToBST(node1))