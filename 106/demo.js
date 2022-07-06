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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const innerBuildTree = (
    inorderLeft,
    inorderRight,
  ) => {
    if (inorderLeft > inorderRight) {
      return null;
    }

    const rootVal = postorder.pop();
    const root = new TreeNode(rootVal);

    const inorderIndex = inorder.findIndex((el) => el === rootVal);

    root.right = innerBuildTree(
      inorderIndex + 1,
      inorderRight,
    )
    root.left = innerBuildTree(
      inorderLeft,
      inorderIndex - 1,
    );
    return root;
  };

  return innerBuildTree(0, inorder.length - 1);
};

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))