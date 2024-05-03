function isBalanced(root) {
    if (!root) return true;
    const dfs = (root) => {
        if (!root) return 0;
        let leftHeight = dfs(root.left);
        if(leftHeight === false) return false;
        let rightHeight = dfs(root.right);
        if(rightHeight === false) return false;
        if (Math.abs(leftHeight - rightHeight)>1) return false;
        return Math.max(leftHeight, rightHeight) + 1;
    }

    return dfs(root) ? true : false
}

module.exports = isBalanced;