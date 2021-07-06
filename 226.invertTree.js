var invertTree = function(root) {
    if (!root){
        return null
    }
    const dfs = (node) => {
        if (!node) return
        let hold = node.right
        node.right = node.left
        node.left = hold
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return root
      
// if (!root){
//     return null
// }
//  if (root !== null) {
//     const tmp = root.left;
//     root.left = invertTree(root.right);
//     root.right = invertTree(tmp);
// }
// return root;
}