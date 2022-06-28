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
 * @return {boolean}
 */
 var isSymmetric = function (root) {
  if (root == null) return true
  function dfs(p, q) {
      if (p == null && q == null) return true
      if (p == null && q !== null || (p !== null && q == null)) return false
      if (p.val != q.val) return false
      return dfs(p.left, q.right) && dfs(p.right, q.left)
  }
  return dfs(root.left, root.right)
};
