/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
const stepInto = (map, cur, step, n, cnt) => {
  if (step === 0) {
    if (cur === n) {
      cnt.v++;
    }
    return;
  }

  const next = map.get(cur) || [];
  for (let i = 0; i < next.length; i++) {
    stepInto(map, next[i], step - 1, n, cnt);
  }
}

var numWays = function(n, relation, k) {
  const map = new Map();
  for (let i = 0; i < relation.length; i++) {
    const p = relation[i][0]
    if (map.has(p)) {
      map.set(p, [...map.get(p), relation[i][1]])
    } else {
      map.set(p, [relation[i][1]])
    }
  }
  const cnt = { v: 0 }
  stepInto(map, 0, k, n - 1, cnt);
  return cnt.v
};

console.log(numWays(5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 3))
console.log(numWays(3, [[0,2],[2,1]], 2))