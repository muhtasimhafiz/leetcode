'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepStrictEqual(method([1,1,1,2,2,3],2),[1,2]);
    });
    it('2', () => {
        assert.deepStrictEqual(method([1],1),[1]);
    });
    it('3', () => {
        assert.deepEqual(method([4,1,-1,2,-1,2,3]
            ,2),[2,-1]);
    });
    it('4', () => {
        assert.deepStrictEqual(method([],1),[]);
    });
    it('5', () => {
        assert.deepStrictEqual(method([1,1,1,2,2,3],3),[1,2,3]);
    });
    
});
