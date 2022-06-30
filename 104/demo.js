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
var maxDepth = function(root) {
  if (!root) return 0;
  let maxDept = 1;
  const traverse = (node, dep) => {
    if (!node) return;
    dep += 1;
    maxDept = Math.max(maxDept, dep);
    traverse(node.left, dep);
    traverse(node.right, dep);
  }
  traverse(root, 0)
  return maxDept;
};

console.log(maxDepth())