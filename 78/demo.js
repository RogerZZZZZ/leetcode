/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = []
  const backtrack = (index, tmp) => {
    res.push(tmp.slice())
    for (let i = index; i < nums.length; i++) {
      tmp.push(nums[i])
      backtrack(i + 1, tmp)
      tmp.pop()
    }
  }
  backtrack(0, [])
  return res
};

console.log(subsets([1,2]))