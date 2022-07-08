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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = [];
  if (!root) return res;

  const traverse = (node, target, arr) => {
    if (!node) return;
    if (!node.left && !node.right && target === node.val) {
      arr.push(node.val);
      res.push(arr);
      return;
    }
    arr.push(node.val)
    traverse(node.left, target - node.val, [...arr]);
    traverse(node.right, target - node.val, [...arr]);
  }
  traverse(root, targetSum, []);
  return res;
};

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

console.log(pathSum(root, 30))