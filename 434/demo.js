/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  const trimed = s.trim();
  if (!trimed) return 0
  return trimed.split(' ').filter(s => s).length;
};

console.log(countSegments('Hello, my name is John'))
console.log(countSegments(''))
console.log(countSegments('     '))
console.log(countSegments(", , , ,        a, eaefa"))