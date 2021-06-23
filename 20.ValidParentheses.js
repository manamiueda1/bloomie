//  20. Valid Parentheses 
//  https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    let stack = []
    let dict = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for (let i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(dict[s[i]])
        } else if (stack.pop() !== s[i]){
            return false 
        }
    }
    if (stack.length > 0){
        return false 
    }
    return true
};
