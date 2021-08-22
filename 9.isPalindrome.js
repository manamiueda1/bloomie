// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    //     let num = String(x)
        
    //     if (num[0] === '-'){
    //         return false 
    //     }
    //     let pointer1 = 0
    //     let pointer2 = num.length-1
       
    //     while (pointer1 < pointer2){
    //         if (num[pointer1] !== num[pointer2]){
    //             return false
    //             }
    //         pointer1++
    //         pointer2--
    //     }
         
    //     return true
        let num = String(x).split('')
        console.log(num)
        while (num.length > 1){
            if (num.shift() !== num.pop()){
                return false
            }
        }
        return true
    }