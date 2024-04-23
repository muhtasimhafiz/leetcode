function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if(!this.value) {
        this.value = value;
        return;
    }

    if (value < this.value) {
        if (this.left === null) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
};

BST.prototype.remove = function(value) {
    // Implement remove method logic here
};

BST.prototype.contains = function(value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        return this.left !== null && this.left.contains(value);
    } else {
        return this.right !== null && this.right.contains(value);
    }
};

BST.prototype.inOrderTraversal = function(callback) {
    if (this.left !== null) {
        this.left.inOrderTraversal(callback);
    }
    callback(this.value);
    if (this.right !== null) {
        this.right.inOrderTraversal(callback);
    }
};

BST.prototype.dfs = function(callback) {
    if (this.left !== null) {
        this.left.dfs(callback);
    }
    callback(this.value); // Process the current node
    if (this.right !== null) {
        this.right.dfs(callback);
    }
}


BST.prototype.bfs = function(callback) {
    callback(this.value); // Process the current node
    let list = [this.left, this.right];
    while(list.length > 0) {
        const node = list.shift();
        if (node !== null) {
            callback(node.value);
            list.push(node.left);
            list.push(node.right);
        }
    }
}

module.exports = BST;
