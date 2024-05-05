'use strict';

var assert = require('assert');
const method = require('../index.js');


describe('Tests', () => {
    it('1', () => {
        let nums = [3,4,5,1,2]
        assert.equal(method(nums),1);
    });
    it('2', () => {
        assert.equal(method([4,5,6,7,0,1,2]),0);
    });
});
