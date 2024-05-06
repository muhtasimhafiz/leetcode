'use strict';

const arrayToBinary = require('../../DSA/TEST_HELPER/arrayToBinary.js');
var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        let arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
        let root = arrayToBinary(arr);
        // console.log(root);
        assert.equal(method(root, 2, 8), 6);
    });
    it('2', () => {
        let arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
        let root = arrayToBinary(arr);
        assert.equal(method(root, 2, 4), 2);
    });
});
