function maxDepth(root, depth = 0){
    if(!root) return depth;
    depth++;
    let left_depth = maxDepth(root.left,depth);
    let right_depth = maxDepth(root.right, depth)
    return Math.max(left_depth,right_depth);
}

module.exports = maxDepth;