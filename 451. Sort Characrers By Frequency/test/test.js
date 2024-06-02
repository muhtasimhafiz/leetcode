'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {

    it('1', () => {
        assert.equal(method('cccaaa'),'aaaccc');
    });
    it('2', () => {
        assert.equal(method('Aabb'),'bbAa');
    });
    it('3', () => {
        assert.equal(method('tee'),'eet');
    });
});
