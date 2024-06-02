'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([3,2,3]),3);
    });
    it('2', () => {
        assert.equal(method([2,2,1,1,1,2,2]),2);
    });
});
