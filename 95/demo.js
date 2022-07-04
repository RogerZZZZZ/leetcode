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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const gen = (start, end) => {
    const res = [];
    if (start > end) {
      res.push(null);
      return res;
    }

    for (let i = start; i <= end; i++) {
      const leftTree = gen(start, i - 1);
      const rightTree = gen(i + 1, end);

      for (const leftNode of leftTree) {
        for (const rightNode of rightTree) {
          const node = new TreeNode(i, leftNode, rightNode);
          res.push(node);
        }
      }
    }
    return res;
  }

  if (n === 0) return [];
  return gen(1, n);
};

console.log(generateTrees(3))