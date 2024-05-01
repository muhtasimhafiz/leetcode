'use strict';

const BST = require("../../DSA/BST/index.js");

var assert = require('assert');
const method = require('../index.js');



describe('Tests', () => {
    it('1', () => {
        let arr = [3, 9, 20, null, null, 15, 7];

        let bst = new BST(3);
        bst.left = new BST(9);
        bst.right = new BST(20);
        bst.right.left = new BST(15);
        bst.right.left = new BST(7);

        assert.equal(method(bst),3);
    });

    it('2', () => {
        let arr = [1,null,2];
        let bst = new BST();
        for(let i of arr) bst.insert(i);
        assert.equal(method(bst),2);
    });

});
