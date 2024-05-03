const bfs = (root) => {
    let queue = [root];
    let arr = [];
    while (queue.length > 0) {
        let node = queue.shift();
        if(node == null) {
            arr.push(null);
            continue;
        }
        arr.push(node.val);
        if (node.left != null) {
            queue.push(node.left)
        } else {
            queue.push(null);
        }
        if (node.right != null){
            queue.push(node.right)
        } else {
            queue.push(null)
        }
            

    }
    return arr;
}

function isSameTree(p, q) {
    let queue1 = [p];
    let queue2 = [q];

    while(queue1.length && queue2.length){
        let node1 = queue1.shift();
        let node2 = queue2.shift();

        if(node1 == null && node2 == null) continue;
        if(node1 == null && node2 !== null) return false;
        if(node2 == null && node1 !== null) return false;

        if(node1.val === node2.val) {
            queue1.push(node1.left);
            queue1.push(node1.right);

            queue2.push(node2.left);
            queue2.push(node2.right);
            
            continue;
        }
        return false;
    }

    return queue1.length == 0 && queue2.length == 0?true:false;
}

module.exports = isSameTree;