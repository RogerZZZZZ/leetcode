/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [[]];
  const arr = nums.sort();
  let start = 1;
  for (let i = 0; i < arr.length; i ++) {
    const temp = [];
    for (let j = 0; j < res.length; j++) {
      const list = res[j] || [];
      if (i > 0 && arr[i] === arr[i-1] && j < start) {
        continue;
      }
      const t = list.slice();
      t.push(arr[i]);
      
      temp.push(t);
    }

    start = res.length;
    res = res.concat(temp)
  }
  return res;
};


console.log(subsetsWithDup([1,2,2]))
