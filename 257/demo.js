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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  const res = [];
  const traverse = (node, str) => {
    const s = `${str}${str ? '->' : ''}${node.val}`
    if (!node.left && !node.right) {
      res.push(s);
      return;
    }
    if (node.left) {
      traverse(node.left, s)
    }
    if (node.right) {
      traverse(node.right, s)
    }
  }
  traverse(root, '');
  return res;
};

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

console.log(binaryTreePaths(root))