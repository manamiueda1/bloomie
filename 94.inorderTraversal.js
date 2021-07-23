// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
    let inOrderArr = []
    const traverse = (node) => {
      if(!root) return;
      if(node.left) traverse(node.left)
      inOrderArr.push(node.val)
        console.log(node.left, 'left')
      if(node.right) traverse(node.right);
        console.log(node.right, 'right')
        
    }
    traverse(root)
    return inOrderArr
};