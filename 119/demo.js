/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const res = [];
  const rows = rowIndex + 1;
  const build = (index) => {
    if (index === rows) return;
    if (index === 0) {
      res.push([1])
      build(index + 1);
      return;
    }
    if (index === 1) {
      res.push([1,1])
      build(index + 1);
      return;
    }
    const prevArr = res[index - 1];
    const temp = [1];
    for (let i = 1; i < index + 1; i ++) {
      temp[i] = prevArr[i - 1] + prevArr[i]
    }
    temp[index] = 1;
    res.push(temp.slice())

    build(index + 1)
  }

  build(0);

  return res[rows - 1];
};


console.log(getRow(3))