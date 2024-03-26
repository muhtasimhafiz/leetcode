'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([3, 2, 2, 3], 2), 2);
    });
    it('2', () => {
        assert.equal(method([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
    });
    it('3', () => {
        assert.equal(method([3, 2, 2, 3], 3), 2);
    });
});

