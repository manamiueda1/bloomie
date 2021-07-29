// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g, '').length;
};