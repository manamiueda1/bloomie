// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/



var reverse = function(x) {
    //      const number = Math.abs(x).toString().split('').reverse().join('');
    
    //     if (number > Math.pow(2, 31)) {
    //         return 0
    //     }
    
    //     return x < 0 ? -number : number;
        
         let revert = 0;
        // const isNegative = x < 0;
        const isNegative = x < 0 ? true : false;
    
        // x = Math.abs(x);
        if (isNegative) {
            x = -1 * x;
        }
    
        while(x) {
            const pop = x % 10;
            console.log(x, 'before')
            x = Math.trunc(x / 10);
            console.log(x, 'after')
            revert = revert * 10 + pop
        }
    
        // for (let i = x; i; i = Math.trunc(i / 10)) {
        //     revert = revert * 10 + i % 10
        // }
    
    
        // if (revert > 2**31) {
        //     return 0;
        // }
    
        if (revert >= 2147483648) {
            return 0;
        }
    
        return isNegative ? -revert : revert
    };