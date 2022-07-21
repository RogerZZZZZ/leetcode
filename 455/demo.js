var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  const childrenNums = g.length;
  const cookieNums = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < childrenNums && j < cookieNums; i++, j++) {
    while (j < cookieNums && g[i] > s[j]) {
      j++
    }
    if (j < cookieNums) {
      count += 1;
    }
  }
  return count;
};
