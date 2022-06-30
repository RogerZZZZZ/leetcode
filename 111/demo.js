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
var minDepth = function(root) {
  if (!root) return 0;
  let minDep = Number.MAX_SAFE_INTEGER;

  const traverse = (node, dep) => {
    if (!node) return;
    dep += 1;
    if (minDep < dep) return
    if (!node.left && !node.right) {
      minDep = Math.min(minDep, dep);
    }
    traverse(node.left, dep);
    traverse(node.right, dep);
  }
  traverse(root, 0)
  return minDep;
};

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

console.log(minDepth(root))
