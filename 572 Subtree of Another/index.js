function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    if(isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) return true;
    return false;
}

function isSameTree(root, subRoot) {
    let queue = [root];
    let queue_sub = [subRoot]

    while (queue.length && queue_sub.length) {
        let node = queue.shift();
        let node_sub = queue_sub.shift();

        if (!node && !node_sub) continue;
        if (!node && node_sub) return false;
        if (!node_sub && node) return false;

        if (node.val == node_sub.val) {
            queue.push(node.left);
            queue.push(node.right);

            queue_sub.push(node_sub.left);
            queue_sub.push(node_sub.right)
            continue;
        }
        return false;
    }

    return true;

}

module.exports = isSubtree;