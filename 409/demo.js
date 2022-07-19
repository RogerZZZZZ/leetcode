/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let ans = 0;
  let odd = false;
  let strMap = {};
  for(let i = 0; i < s.length; i++){
    if(s[i] in strMap){
      strMap[s[i]] += 1;
    } else {
      strMap[s[i]] = 1;
    }
  }
  
  for(let key in strMap) {
    if(strMap[key] % 2 === 0) {
      ans += strMap[key];
    } else {
      odd = true;
      ans += strMap[key]-1;
    }
  }
  if(odd) {
    ans+=1;
  }
  return ans;
};