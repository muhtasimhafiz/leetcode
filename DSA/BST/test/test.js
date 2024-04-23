const assert = require('assert');
const BST = require('../index');

describe('Binary Search Tree', () => {
    it('should insert values correctly', () => {
        const bst = new BST(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);

        assert.strictEqual(bst.value, 10);
        assert.strictEqual(bst.left.value, 5);
        assert.strictEqual(bst.right.value, 15);
        assert.strictEqual(bst.left.left.value, 3);
        assert.strictEqual(bst.left.right.value, 7);
        assert.strictEqual(bst.right.left.value, 12);
        assert.strictEqual(bst.right.right.value, 17);
    });

    it('should return true for existing values in the tree', () => {
        const bst = new BST(10);
        bst.insert(5);
        bst.insert(15);

        assert.strictEqual(bst.contains(10), true);
        assert.strictEqual(bst.contains(5), true);
        assert.strictEqual(bst.contains(15), true);
    });

    it('should return false for non-existing values in the tree', () => {
        const bst = new BST(10);
        bst.insert(5);
        bst.insert(15);

        assert.strictEqual(bst.contains(3), false);
        assert.strictEqual(bst.contains(7), false);
        assert.strictEqual(bst.contains(12), false);
    });

    it('should perform in-order traversal correctly', () => {
        const bst = new BST(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);

        const result = [];
        bst.inOrderTraversal((value) => {
            result.push(value);
        });

        assert.deepStrictEqual(result, [3, 5, 7, 10, 12, 15, 17]);
    });

    it('should perform dfs traversal correctly', () => {
        var bst = new BST(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(2);
        bst.insert(4);
        bst.insert(8);

        const result = [];
        bst.dfs((value) => {
            result.push(value);
        });

        assert.deepStrictEqual(result, [2, 3, 4, 5, 7, 8]);
    });
    it('should perform bfs traversal correctly', () => {
        var bst = new BST(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(2);
        bst.insert(4);
        bst.insert(8);

        const result = [];
        bst.bfs((value) => {
            result.push(value);
        });

        assert.deepStrictEqual(result, [5, 3, 7, 2, 4, 8]);
    });
});
