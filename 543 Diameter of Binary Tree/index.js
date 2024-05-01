function diameterOfBinaryTree(root) {
    let diameter = 0;
    function dfs(root) {
        if (!root) return 0;
        let leftHeight = dfs(root.left);
        let rightHeight = dfs(root.right);
        diameter = Math.max(diameter,leftHeight+rightHeight);
        return Math.max(leftHeight, rightHeight)+1
    }
    dfs(root);
    return diameter;
}


module.exports = diameterOfBinaryTree;