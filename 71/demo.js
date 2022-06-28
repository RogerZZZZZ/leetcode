/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split('/');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === '.') {
      // 不做任何事
    } else if (item === '..') {
      res.pop();
    } else if (item !== '') {
      res.push(item);
    }
  }
  return `/${res.join('/')}`;
};

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/a/./b/../../c/'))