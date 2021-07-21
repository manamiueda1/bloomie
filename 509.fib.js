// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

var fib = function(n, memo={}) {
    
    // if(n === 1 || n === 0){
    //    return n
    // } else {
    //    return fib(n -1) + fib(n-2)
    // }
       if(memo[n] !== undefined){
           return memo[n]
       } 
       if(n<=1){
           return n;
       }
       let res = fib(n-1, memo) +  fib(n-2, memo);
       memo[n] = res
       console.log(n)
       console.log(memo)
       
       return res
   };