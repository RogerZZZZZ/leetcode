/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const vArr1 = version1.split('.')
  const vArr2 = version2.split('.')

  let index = 0;
  while (vArr1[index] !== undefined && vArr2[index]) {
    const item1 = Number(vArr1[index]);
    const item2 = Number(vArr2[index]);
    if (item1 > item2) {
      return 1;
    } else if (item1 < item2) {
      return -1;
    }
    // 相等的情况
    index += 1;
  }

  while (vArr1[index] !== undefined) {
    if (Number(vArr1[index]) !== 0) {
      return 1;
    }
    index += 1;
  }

  while (vArr2[index] !== undefined) {
    if (Number(vArr2[index]) !== 0) {
      return -1;
    }
    index += 1;
  }

  return 0;
};

console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))