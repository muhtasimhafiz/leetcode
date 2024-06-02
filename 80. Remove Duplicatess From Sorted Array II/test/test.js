'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    // it('1', () => {
    //     assert.equal(method([1,1,1,2,2,3]),5);
    // });
    it('2', () => {
        assert.equal(method([0,0,1,1,1,1,2,3,3]),7);
    });
});
