/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const n = s.length;
  const wordDictSet = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

// console.log(wordBreak('leetcode', ['leet', 'code']))
// console.log(wordBreak('applepenapple', ['apple', 'pen']))
// console.log(wordBreak('catsandog', ['cats', 'dog', 'an1']))
console.log(wordBreak('cars', ['car', 'ca', 'rs']))