// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function(root) {
  const dfs = (left = root.left, right = root.right) => {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };
  return dfs();
}