'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([1,1,2,2,3,4]),true);
    });
    it('2', () => {
        assert.equal(method([1,1,1,1]),false);
    });
});
