/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

 function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;
  let stack = [];
  stack.push(root)
  while (stack.length) {
    const size = stack.length;
    let start = null
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      if (start) {
        start.next = node;
      }
      start = node;
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right);
    }
    start.next = null;
  }

  return root;
};

const node7 = new Node(7, null, null, null);
const node6 = new Node(6, null, null, null);
const node5 = new Node(5, null, null, null);
const node4 = new Node(4, null, null, null);
const node3 = new Node(3, null, node7, null);
const node2 = new Node(2, node4, node5, null);
const node1 = new Node(1, node2, node3, null);

console.log(connect(node1))