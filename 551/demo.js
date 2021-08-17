/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !(s.indexOf('LLL') > -1
    || s.split('').filter(t => t === 'A').length >= 2)
};

console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))
console.log(checkRecord('AA'))