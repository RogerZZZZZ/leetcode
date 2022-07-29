var licenseKeyFormatting = function(s, k) {
  const ans = [];
  let cnt = 0;

  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== '-') {
          cnt++;
          ans.push(s[i].toUpperCase());
          if (cnt % k === 0) {
              ans.push("-");
          }
      }
  }
  if (ans.length > 0 && ans[ans.length - 1] === '-') {
      ans.pop();
  }
  
  return ans.reverse().join('');
};
