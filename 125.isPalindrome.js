// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    // s = s.toLowerCase().replace(/[\W_]/g, "");
    let right = s.length - 1;
    let left = 0;
    while (left < right) {
        if (s[left] !== s[right]) {
        return false;
    }
    left++;
    right--;
  }
  return true;
};