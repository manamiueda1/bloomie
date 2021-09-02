//  543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function(root) {
    let diameter = 0
 
     const dfs = (node) => {
       if (!node) return 0
 
       let left = dfs(node.left)
       let right = dfs(node.right)
         
       diameter = Math.max(diameter, right + left)
       
       return 1 + Math.max(left, right)
     }
     dfs(root)
     return diameter
 };