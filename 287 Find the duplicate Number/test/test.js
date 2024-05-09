'use strict';

var assert = require('assert');
const method = require('../index.js');

describe('Tests', () => {
    it('1', () => {
        assert.equal(method([1,3,4,2,2]),2);
    });
    it('2', () => {
        assert.equal(method([3,1,3,4,2]),3);
    });
});
