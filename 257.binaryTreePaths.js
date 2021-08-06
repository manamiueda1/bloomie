// 257. Binary Tree Paths
// https://leetcode.com/problems/binary-tree-paths/

var binaryTreePaths = function(root) {
    let result = [];
    function dfs(node = root, array = [root.val]){
        if (!node.left && !node.right){
            result.push(array.join('->'))
            return
        }
        if (node.left){
            array.push(node.left.val)
            dfs(node.left, array)
            array.pop()
        }
        if(node.right){
            array.push(node.right.val)
            dfs(node.right, array)
            array.pop()
        }
    }
    dfs()
    return result;
};