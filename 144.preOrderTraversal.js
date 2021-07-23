// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function(root) {
    let inOrderArr = []
    const traverse = (node) => {
      if(!root) return;
      inOrderArr.push(node.val)
        
      if(node.left) traverse(node.left)
        // console.log(node.left, 'left')
      if(node.right) traverse(node.right);
        // console.log(node.right, 'right')
    }
    traverse(root)
    return inOrderArr
};