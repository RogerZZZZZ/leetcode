var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const res = [], size = nums.length
  for(let b = 0; b < size - 2; ++b) {
      if( nums[b] === nums[b - 1]) continue
      let i = b + 1, j = size - 1
      while(i < j) {
          let sum = nums[b] + nums[i] + nums[j]
          if(sum < 0) { // 0 就是target
              while(i < j && nums[i] === nums[++i]){}
          } else if(sum > 0) { // 0 就是target
              while(i < j && nums[j] === nums[--j]){}
          } else{
              res.push([ nums[b], nums[i], nums[j] ])
              while(i < j && nums[i] === nums[++i]){}
              while(i < j && nums[j] === nums[--j]){}
          }
      }
  }
  return res
};
