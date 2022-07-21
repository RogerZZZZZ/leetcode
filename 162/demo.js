var findPeakElement = function(nums) {
  const n = nums.length;
  let idx = parseInt(Math.random() * n);

  while (!(compare(nums, idx - 1, idx) < 0 && compare(nums, idx, idx + 1) > 0)) {
      if (compare(nums, idx, idx + 1) < 0) {
          idx += 1;
      } else {
          idx -= 1;
      }
  }
  
  return idx;
}

// 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
// 方便处理 nums[-1] 以及 nums[n] 的边界情况
const get = (nums, idx) => {
  if (idx === -1 || idx === nums.length) {
      return [0, 0];
  }
  return [1, nums[idx]];
}

const compare = (nums, idx1, idx2) => {
  const num1 = get(nums, idx1);
  const num2 = get(nums, idx2);
  if (num1[0] !== num2[0]) {
      return num1[0] > num2[0] ? 1 : -1;
  }
  if (num1[1] === num2[1]) {
      return 0;
  }
  return num1[1] > num2[1] ? 1 : -1;
}
