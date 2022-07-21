/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.list = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left)
    this.list.push(node.val);
    traverse(node.right);
  }
  traverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.list.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.list.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 const node1 = new TreeNode(1, null, null)
 const node3 = new TreeNode(7, null, null)
 const node4 = new TreeNode(20, null, null)
 const node2 = new TreeNode(15, node3, node4)
 const root = new TreeNode(3, node1, node2);

const obj = new BSTIterator(root)
console.log(obj.hasNext())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.hasNext())