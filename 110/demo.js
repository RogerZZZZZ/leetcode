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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0], null, null);
  const mid = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, mid);
  const rightArray = nums.slice(mid + 1);
  return new TreeNode(nums[mid], sortedArrayToBST(leftArray), sortedArrayToBST(rightArray));
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))