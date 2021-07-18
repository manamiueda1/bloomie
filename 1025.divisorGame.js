// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/

var divisorGame = function(n) {
    if (n % 2 === 0){
        return true
    } 
    return false
};

var divisorGame = function(N) {
    const dp = Array(N+1).fill(false);
  for(let i = 2; i <= N; i++) {
      for(let j = 1; j < i; i++) {
          if(i % j === 0 && !dp[i - j]) {
              dp[i] = true;
              break;
          }
      }
  }
  return dp[N]
};