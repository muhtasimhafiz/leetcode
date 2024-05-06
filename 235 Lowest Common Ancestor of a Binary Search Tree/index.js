function lowestCommonAncestor(root, p, q) {

    while (root) {
        if (root.left && root.val > p && root.val > q) {
            root = root.left;
        } else if (root.right && root.val < p && root.val < q) {
            root = root.right;
        } else {
            return root;
        }
    }

    return root;
}
    module.exports = lowestCommonAncestor;
