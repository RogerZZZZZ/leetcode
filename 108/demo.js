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
 * @return {boolean}
 */
const depCalc = (node) => {
  return !node ? 0 : Math.max(depCalc(node.left), depCalc(node.right)) + 1;
}

var isBalanced = function(root) {
  if (!root) return true;
  if (Math.abs(depCalc(root.left) - depCalc(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};
