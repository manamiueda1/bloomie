// 1332. Remove Palindromic Subsequences
// https://leetcode.com/problems/remove-palindromic-subsequences/

var removePalindromeSub = function(s) {
    right = s.length-1
    for (let i = 0; i < right; i++){
        if(s[i] !==s[right]){
            return 2
        }
        right--
    }
    return 1
};