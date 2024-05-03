'use strict';

const arrayToBinary = require('../../DSA/TEST_HELPER/arrayToBinary.js');
var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        let arr = [1,2,2,3,3,null,null,4,4];
        let root = arrayToBinary(arr);
        assert.equal(method(root),false);
    });
    it('2', () => {
        let arr = [];
        let root = arrayToBinary(arr);
        console.log(root);
        assert.equal(method(root),true);
    });
    it('3',()=>{
        let arr = [3,9,20,null,null,15,7];
        let root = arrayToBinary(arr);
        assert.equal(method(root), true)
    })
    it('4',()=>{
        let arr = [1,null,2,null,3];
        let root = arrayToBinary(arr);
        assert.equal(method(root), false)
    })
});


