'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([100,4,200,1,3,2]),4);
    });
    it('2', () => {
        assert.equal(method([0,3,7,2,5,8,4,6,0,1]),9);
    });
});
