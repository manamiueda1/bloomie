// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    let lcp = '';
if (!strs || !strs.length) return lcp;

// sorting array alphabetically 
strs.sort()
  console.log(strs)

for (let i = 0; i < strs[0].length; ++i) {
  if (strs[0][i] !== strs[strs.length - 1][i]) {    // comparing only first and last item
    break;
  } else {
    lcp += strs[0][i];
  }
}
return lcp;
  
};