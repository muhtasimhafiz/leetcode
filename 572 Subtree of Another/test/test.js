'use strict';

var arrayToBinary = require('../../DSA/TEST_HELPER/arrayToBinary.js');
var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        let arr = [3,4,5,1,2,null,null,null,null,0]
        let root = arrayToBinary(arr);
        let subRoot = arrayToBinary([4,1,2]);

        assert.equal(method(root,subRoot),false);
    });
    it('2', () => {
        let root = arrayToBinary([3,4,5,1,2]);
        let subRoot = arrayToBinary([4,1,2]);
        assert.equal(method(root, subRoot),true);
    });
});
