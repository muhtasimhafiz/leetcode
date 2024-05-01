'use strict';

var arrayToBinary = require('../../DSA/TEST_HELPER/ArrayTOBinary.js');

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        let array = [1, 2, 3, 4, 5];
        let binaryTree = arrayToBinary(array);
        assert.equal(method(binaryTree), 3);
    });
    it('2', () => {
        let array = [1, 2];
        let binaryTree = arrayToBinary(array);

        assert.equal(method(binaryTree), 1);
    });
    it('3', () => {
        let binaryTree = arrayToBinary([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]);
        assert.equal(method(binaryTree), 8);
    });
});
