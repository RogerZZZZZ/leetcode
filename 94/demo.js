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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  const res = []
  const traverse = (node) => {
    if (!node) return;

    traverse(node.left)
    res.push(node.val);
    traverse(node.right);
  }
  traverse(root)
  return res;
};

const node = new TreeNode(3, null, null)
const rightRoot = new TreeNode(2, node, null);
const root = new TreeNode(1, null, rightRoot);

console.log(inorderTraversal(root));
