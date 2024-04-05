'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method('()'), true);
    });
    it('2', () => {
        assert.equal(method('()[]{}'), true);
    });
    it('3', () => {
        assert.equal(method('(]'), false);
    });

});
