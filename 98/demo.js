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
var isValidBST = function(root) {
  const stack = [];
  let val = Number.MIN_SAFE_INTEGER;

  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left;
    }
    root = stack.pop();
    
    if (root.val <= val) {
      return false;
    }
    val = root.val;
    root = root.right;
  }
  return true;
};


const node = new TreeNode(1, null, null);
const root = new TreeNode(1, node, null);

console.log(isValidBST(root))