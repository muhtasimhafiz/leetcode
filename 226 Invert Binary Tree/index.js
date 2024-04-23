function invertTree(root){
    if(!root) return root;
    let temp = root.left;
    [root.left, root.right] = [root.right, root.left]
    root.right = temp;
    invertTree(root.left)
    invertTree(root.right)
}

module.exports = invertTree;
