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
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let list = []
  const traverse = (node, str) => {
    if (!node) {
      return;
    };
    if (!node.left && !node.right) {
      list.push(`${str}${node.val}`);
      return;
    }
    traverse(node.left, `${str}${node.val}`)
    traverse(node.right, `${str}${node.val}`)
  }

  traverse(root, '');
  return list.reduce((acc, item) => {
    acc += Number(item);
    return acc;
  }, 0)
};

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

console.log(sumNumbers(root))