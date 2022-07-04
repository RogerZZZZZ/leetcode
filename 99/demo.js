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

const inorder = (root, nums) => {
  if (!root) {
    return;
  }

  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
}

const findTwoToSwap = (nums) => {
  let index1 = -1, index2 = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) {
      index2 = i + 1;
      if (index1 === -1) {
        index1 = i;
      } else {
        break;
      }
    }
  }
  return [nums[index1], nums[index2]];
}

const recover = (r, count, x, y) => {
  if (r !== null) {
    if (r.val === x || r.val === y) {
      r.val = r.val === x ? y : x;
      if (--count === 0) {
        return;
      }
    }
    recover(r.left, count, x, y);
    recover(r.right, count, x, y);
  }
}

var recoverTree = function(root) {
  const nums = [];
  inorder(root, nums);
  const [x, y] = findTwoToSwap(nums);
  recover(root, 2, x, y);
};