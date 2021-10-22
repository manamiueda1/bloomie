// 993. Cousins in Binary Tree
// https://leetcode.com/problems/cousins-in-binary-tree/

var isCousins = function(root, x, y) {
    if (root.val === x || root.val === y) return false
    
    const dfs = (node, depth = 0, target) => {
      if (!node) return false;
      if (node.left && node.left.val === target) {
        return [depth, node]
      }
      if (node.right && node.right.val === target) {
        return [depth, node]
      }
      return dfs(node.left, depth + 1, target) || dfs(node.right, depth + 1, target);
    };
    const [lDepth, lParent] = dfs(root, 0, x);
    const [rDepth, rParent] = dfs(root, 0, y);
    return lParent !== rParent && lDepth === rDepth;
};