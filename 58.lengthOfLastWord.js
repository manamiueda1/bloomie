// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    // let len = 0;
    // for (let i = s.length - 1; i >= 0; i--) {
    //     if (s[i] !== ' ') {
    //         len++;
    //     }
    //     else if (len){
    //         return len
    //     }
    // }
    // return len;
    s = s.trim()
    const arr = s.split(' ')
    return arr[arr.length - 1].length
};