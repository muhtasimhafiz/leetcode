'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([1,2,3,1]),true);
    });
    it('2', () => {
        assert.equal(method([1,1,1,3,3,4,3,2,4,2]),true);
    });
    it('3', () => {
        assert.equal(method([1,2,3,4]),false);
    });
});
