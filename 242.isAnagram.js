// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    let hash = {}
    
    if (s.length !== t.length){
        return false 
    }
    
    for (let i = 0; i < s.length; i++){
        if (hash[s[i]] === undefined){
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    for (let i = 0; i < t.length; i++){
        if (!hash[t[i]]){
            return false
        } else {
            hash[t[i]]--
        }
    }
    return true
};
