// 942. DI String Match
// https://leetcode.com/problems/di-string-match/


var diStringMatch = function(s) {
    let result = [];
    let increase = 0
    let decrease = s.length
    for (let i = 0; i < s.length; i++){
      if (s[i] === 'I'){
        result.push(increase);
        increase++
      }
      if (s[i] === 'D'){
        result.push(decrease);
        decrease--
      }
    }
    result.push(decrease)
    return result 
};