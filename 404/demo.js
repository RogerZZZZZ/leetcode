/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let leftVal = 0;
  if (!root) leftVal
  const traverse = (node, isLeft) => {
    if (!node) {
      return;
    }

    if (isLeft && !node.left && !node.right) {
      leftVal += node.val;
    }

    traverse(node.left, true);
    traverse(node.right);
  }

  traverse(root);
  return leftVal;
};