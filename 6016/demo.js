/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
  const array = s.split(':');
  const [ charA, begin ] = array[0];
  const [ charB, end ] = array[1];
  const charBegin = charA.charCodeAt();
  const charEnd = charB.charCodeAt();
  const res = [];
  for (let i = charBegin; i <= charEnd; i++) {
    res.push(
      ...Array.from({ length: end - begin + 1}, (e, idx) => `${String.fromCharCode(i)}${Number(begin) + idx}`)
    )
  }
  return res;
};

cellsInRange("K1:L2")
cellsInRange("A1:F1")

