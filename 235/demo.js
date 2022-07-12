/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(!root || root.val === p.val || root.val === q.val) return root;
  // 继续向下寻找，直到满足终止条件
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 如果其中一个为null，直接返回另一个
  // 如果两个都为null，直接返回null，而此时两者都为null，所以不影响逻辑。
  if(!left) return right;
  if(!right) return left;
  // 如果两者均不为null，说明已经找到了对应的最近公共节点。
  return root;
};

const left = new TreeNode(2, null, null)
const left11 = new TreeNode(0, null, null)
const left121 = new TreeNode(3, null, null)
const left122 = new TreeNode(5, null, null)
const left12 = new TreeNode(4, left121, left122)

const node3 = new TreeNode(7, null, null)
const node4 = new TreeNode(9, null, null)
const right = new TreeNode(8, node3, node4)

const root = new TreeNode(6, left, right);

console.log(lowestCommonAncestor(root, 2, 8))