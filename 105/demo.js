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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const innerBuildTree = (
    preOrderLeft,
    preOrderRight,
    inOrderLeft,
    inOrderRight
  ) => {
    if (preOrderLeft > preOrderRight) {
      return null;
    }

    const rootIndex = preOrderLeft;
    const indexInInorder= inorder.findIndex((el) => el === preorder[rootIndex]);

    const root = new TreeNode(preorder[rootIndex]);
    
    const sizeLeft = indexInInorder - inOrderLeft;

    root.left = innerBuildTree(
      preOrderLeft + 1,
      preOrderLeft + sizeLeft,
      inOrderLeft,
      indexInInorder - 1,
    );
    root.right = innerBuildTree(
      preOrderLeft + sizeLeft + 1,
      preOrderRight,
      indexInInorder + 1,
      inOrderRight,
    );
    return root;
  }

  return innerBuildTree(0, preorder.length - 1, 0, preorder.length - 1);
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))