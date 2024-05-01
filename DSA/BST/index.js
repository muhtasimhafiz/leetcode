 function BST(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(val) {
    if(!val) return;
    if(!this.val) {
        this.val = val;
        return;
    }

    if (val < this.val) {
        if (this.left === null) {
            this.left = new BST(val);
        } else {
            this.left.insert(val);
        }
    } else if (val > this.val) {
        if (this.right === null) {
            this.right = new BST(val);
        } else {
            this.right.insert(val);
        }
    }
};

BST.prototype.remove = function(val) {
    // Implement remove method logic here
};

BST.prototype.contains = function(val) {
    if (val === this.val) {
        return true;
    } else if (val < this.val) {
        return this.left !== null && this.left.contains(val);
    } else {
        return this.right !== null && this.right.contains(val);
    }
};

BST.prototype.inOrderTraversal = function(callback) {
    if (this.left !== null) {
        this.left.inOrderTraversal(callback);
    }
    callback(this.val);
    if (this.right !== null) {
        this.right.inOrderTraversal(callback);
    }
};

BST.prototype.dfs = function(callback) {
    if (this.left !== null) {
        this.left.dfs(callback);
    }
    callback(this.val); // Process the current node
    if (this.right !== null) {
        this.right.dfs(callback);
    }
}


BST.prototype.bfs = function(callback) {
    callback(this.val); // Process the current node
    let list = [this.left, this.right];
    while(list.length > 0) {
        const node = list.shift();
        if (node !== null) {
            callback(node.val);
            list.push(node.left);
            list.push(node.right);
        }
    }
}

module.exports = BST;
