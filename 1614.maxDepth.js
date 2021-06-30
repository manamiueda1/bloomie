// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let count = 0;
      let depth = 0;
      
      for (let i = 0; i < s.length; i++){
          if (s[i] === '('){
              count++ 
          }
          if(s[i] === ')'){
              count-- 
          }
          if(count > depth){
              depth = count
          }
      }
      return depth
  }
  