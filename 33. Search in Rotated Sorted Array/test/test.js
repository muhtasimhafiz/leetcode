'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([4,5,6,7,0,1,2], 0), 4);
    });
    it('2', () => {
        assert.equal(method([4,5,6,7,0,1,2], 3), -1);
    });
    it('3', () => {
        assert.equal(method([1], 0), -1);
    });
});
