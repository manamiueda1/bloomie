// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    let num = [...String(n)]
    
    let sum = num.reduce((accum, curr) => accum + Number(curr), 0)
    let prod = num.reduce((accum, curr) => accum * Number(curr), 1)
    
    return prod - sum
};