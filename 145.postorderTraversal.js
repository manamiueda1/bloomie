// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function(root) {
    let inOrderArr = []
    const traverse = (node) => {
      if(!root) return;
      if(node.left) traverse(node.left)
        // console.log(node.left, 'left')
      if(node.right) traverse(node.right);
        // console.log(node.right, 'right')
      inOrderArr.push(node.val)
    }
    traverse(root)
    return inOrderArr
};