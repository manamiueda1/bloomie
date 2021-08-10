// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function(s) {
    let symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let pointer1 = 0
    let pointer2 = 1
    
    let sum = 0
    
   while (pointer1 < s.length){
       let romanNumeral1 = s[pointer1]
       let romanNumeral2 = s[pointer2]
       if (symbols[romanNumeral1] < symbols[romanNumeral2]){
           sum -= symbols[romanNumeral1] 
       }else{
           sum += symbols[romanNumeral1]  
       }
       pointer1++
       pointer2++
   }
    return sum 
};