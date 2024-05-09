'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.deepEqual(method([1,2,3,0,0,0],3,[2,5,6],3),[1,2,2,3,5,6]);
    });
    it('2', () => {
        let nums1 = [1];
        let m = 1;
        let nums2 = [];
        let n = 0;
        assert.deepEqual(method(nums1,m,nums2,n),[1]);
    });
});
