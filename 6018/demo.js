
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const parentMap = new Map();
  const childSet = new Set();
  descriptions.forEach((node) => {
    const [parent, val, isLeft] = node;
    const treeNode = new TreeNode(val);
    childSet.add(val);
    const exist = parentMap.get(parent) || {};
    exist[isLeft] = treeNode;
    parentMap.set(parent, exist);
  });
  let root = null
  for (const entry of parentMap.entries()) {
    const [ key, values ] = entry;
    if (!childSet.has(key)) {
      root = new TreeNode(key);
    }
  }
  const res = [root.val];

  const parentNodeTravel = (node, parentConfig) => {
    if (!parentConfig) return;
    const left = parentConfig[1];
    const right = parentConfig[0];
    res.push(left ? left.val : null)
    res.push(right ? right.val : null)
    if (left) {
      node.left = left;
      parentNodeTravel(left, parentMap.get(left.val))
    }
    if (right) {
      node.right = right;
      parentNodeTravel(right, parentMap.get(right.val))
    }
  }
  parentNodeTravel(root, parentMap.get(root.val));
  if (res[res.length - 1] === null) res.pop()
  console.log(res);
  return root;
};

console.log(createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]))
console.log(createBinaryTree([[1,2,1],[2,3,0],[3,4,1]]))