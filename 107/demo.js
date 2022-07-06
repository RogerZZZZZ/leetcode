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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let res = [];
  if (!root) return res;
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const size = stack.length;
    res.push([]);
    console.log(size)
    for (let i = 1; i <= size; i++) {
      const node = stack.shift();
      res[res.length - 1].push(node.val);
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
  }

  return res.reverse();
};

const node1 = new TreeNode(9, null, null)
const node3 = new TreeNode(15, null, null)
const node4 = new TreeNode(7, null, null)
const node2 = new TreeNode(20, node3, node4)
const root = new TreeNode(3, node1, node2);

const node11 = new TreeNode(5, null, null)
const node33 = new TreeNode(4, null, null)
const node44 = new TreeNode(3, null, null)
const node22 = new TreeNode(2, node33, node11)
const root1 = new TreeNode(1, node22, node44);


console.log(levelOrderBottom(root))
// console.log(levelOrderBottom(root1))