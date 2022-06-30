/**
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = function(n) {
  let make = (n) => {
    if (n === 0) return ['0']
    if (n === 1) return ['0', '1']

    let prev = make(n - 1)
    let result = []
    let maxIndex = Math.pow(2, n) - 1
    for (let i = 0, len = prev.length; i < len; i++) {
      result[i] = `0${prev[i]}`
      result[maxIndex - i] = `1${prev[i]}`
    }
    return result
  }
  return make(n).map(item => parseInt(item, 2))
};