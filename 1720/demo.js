/**
 * @performance 30%
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  let pre = first;
  for (let i = 0; i < encoded.length; i++) {
    pre = encoded[i] ^ pre;
    encoded[i] = pre;
  }
  return [first, ...encoded];
};

console.log(decode([6,2,7,3], 4))