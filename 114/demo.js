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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return root;
  let list = []
  const traverse = (node) => {
    if (!node) return;
    list.push(node);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1];
    const cur = list[i]
    prev.left = null;
    prev.right = cur;
  }

  return root;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

console.log(flatten(root))