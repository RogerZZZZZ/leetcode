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
var zigzagLevelOrder = function(root) {
  const res = []
  if (!root) return res;
  let flag = true;
  let stack = []
  stack.push(root);

  while (stack.length) {
    res.push([])
    const length = stack.length;
    for (let i = 0; i < length; i++) {
      root = stack.shift();
      res[res.length - 1].push(root.val);
      if (root.left) {
        stack.push(root.left);
      }
      if (root.right) {
        stack.push(root.right);
      }
    }
  }
  return res.map((item) => {
    flag =!flag
    return flag ? item.reverse() : item;
  });
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


console.log(zigzagLevelOrder(root))
console.log(zigzagLevelOrder(root1))