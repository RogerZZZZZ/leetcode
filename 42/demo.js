/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let ans = 0;
  while(left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax < rightMax) {
      ans += leftMax - height[left];
      left++;
    } else {
      ans += rightMax - height[right];
      right--;
    }
  }
  return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))